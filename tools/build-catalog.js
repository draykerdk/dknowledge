#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TARGET = path.join(ROOT, 'data', 'catalog.json');
const CHECK = process.argv.includes('--check');
const EXCLUDED = new Set(['.git', '_site', 'node_modules', 'vendor']);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDED.has(entry.name)) continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(absolute, out);
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) out.push(absolute);
  }
  return out;
}

function language(file) {
  if (/\.PT\.md$/i.test(file) || /(?:^|\/)README ?\.PT\.md$/i.test(file)) return 'pt';
  if (/\.ES\.md$/i.test(file) || /(?:^|\/)README ?\.ES\.md$/i.test(file)) return 'es';
  return 'en';
}

function titleFrom(source, file) {
  const heading = source.match(/^#\s+(.+)$/m);
  const raw = heading
    ? heading[1].replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').trim()
    : path.basename(file, '.md').replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  // Typo and acronym normalization only. There was a rule here rewriting Dknowledge to
  // Dknowledger, from when that was the public name; it now corrupts correct titles, so
  // it is gone. Dknowledge is the public knowledge layer, Dknowledger the private vault.
  return raw
    .replace(/\bLinving\b/gi, 'Living')
    .replace(/\bBsdk\b/g, 'BSDK')
    .replace(/\bOsdk\b/g, 'OSDK');
}

function hrefFor(file) {
  if (file === 'README.md') return '/';
  if (/\/README(?: ?\.(?:PT|ES))?\.md$/i.test(file)) {
    if (/\/README\.md$/i.test(file)) return '/' + path.dirname(file) + '/';
  }
  return '/' + file.replace(/\.md$/i, '.html').split(path.sep).map(encodeURIComponent).join('/');
}

function kindFor(file) {
  if (file === 'CURRENT.md') return 'orientation';
  if (file.startsWith('papers/') && !/README/i.test(path.basename(file))) return 'paper';
  if (file.startsWith('roadmap/')) return 'roadmap';
  if (/^(README|CONTRIBUTING|CODE_OF_CONDUCT)/.test(path.basename(file))) return 'guide';
  if (/README/i.test(path.basename(file))) return 'index';
  return 'document';
}

function stateFor(file, kind, bytes) {
  if (kind === 'roadmap') return 'historical';
  if (!file.startsWith('.github/') && bytes < 200) return 'open';
  if (file === 'CURRENT.md' || /^(README|CONTRIBUTING|CODE_OF_CONDUCT)/.test(path.basename(file))) return 'current';
  if (kind === 'paper') return 'draft';
  return 'context';
}

const documents = walk(ROOT).map((absolute) => {
  const file = path.relative(ROOT, absolute).split(path.sep).join('/');
  const source = fs.readFileSync(absolute, 'utf8');
  const bytes = Buffer.byteLength(source);
  const kind = kindFor(file);
  return {
    path: file,
    href: hrefFor(file),
    title: titleFrom(source, file),
    language: language(file),
    kind,
    state: stateFor(file, kind, bytes),
    bytes
  };
}).sort((a, b) => {
  const order = { current: 0, draft: 1, open: 2, context: 3, historical: 4 };
  return (order[a.state] - order[b.state]) || a.path.localeCompare(b.path);
});

const english = documents.filter((d) => d.language === 'en');
const catalog = {
  schema_version: 1,
  source: 'Generated from the committed repository by tools/build-catalog.js',
  counts: {
    documents: documents.length,
    papers: english.filter((d) => d.kind === 'paper').length,
    open_shells: english.filter((d) => d.state === 'open').length,
    languages: new Set(documents.map((d) => d.language)).size
  },
  documents
};

const output = JSON.stringify(catalog, null, 2) + '\n';
if (CHECK) {
  const current = fs.existsSync(TARGET) ? fs.readFileSync(TARGET, 'utf8') : '';
  if (current !== output) {
    console.error('data/catalog.json is stale. Run: node tools/build-catalog.js');
    process.exit(1);
  }
  console.log('catalog is current: ' + documents.length + ' documents');
} else {
  fs.mkdirSync(path.dirname(TARGET), { recursive: true });
  fs.writeFileSync(TARGET, output);
  console.log('wrote data/catalog.json: ' + documents.length + ' documents');
}

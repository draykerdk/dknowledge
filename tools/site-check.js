#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html');
const client = read('assets/site.js');
const config = read('_config.yml');
const contract = read('.drayker/component.yml');
const catalog = JSON.parse(read('data/catalog.json'));
const failures = [];
let checks = 0;

function check(ok, message) {
  checks++;
  if (!ok) failures.push(message);
}

check(/<title>[^<]{20,}<\/title>/.test(html), 'landing page needs a descriptive title');
check(/<meta name="description" content="[^"]{80,}"/.test(html), 'landing page needs a substantial description');
check(html.includes('<link rel="canonical" href="https://dknowledge.drayker.org/">'), 'canonical domain is wrong');
check(html.includes('application/ld+json'), 'structured data is missing');
check(html.includes('data-drayker') && html.includes('/drayker-mark.js'), 'the official Drayker mark engine is not wired');
check(client.includes('/data/catalog.json'), 'the repository catalog is not wired');
check(!html.includes('https://dknowledge.drayker.org'), 'the retired hostname remains in the landing page');
check(read('CNAME').trim() === 'dknowledge.drayker.org', 'CNAME is not canonical');
check(config.includes('https://dknowledge.drayker.org'), 'Jekyll canonical URL is wrong');
check(contract.includes('https://dknowledge.drayker.org'), 'component evidence URL is wrong');
check(fs.existsSync(path.join(root, 'assets/og.svg')), 'editable Open Graph source is missing');
const og = fs.readFileSync(path.join(root, 'og.png'));
check(og.readUInt32BE(16) === 1200 && og.readUInt32BE(20) === 630, 'og.png must be 1200 × 630');

for (const icon of ['favicon.ico', 'assets/logo/drayker-favicon.svg', 'assets/logo/kit/favicon-32.png', 'assets/logo/kit/favicon-16.png', 'assets/logo/kit/apple-touch-icon.png']) {
  check(fs.existsSync(path.join(root, icon)), 'missing icon asset: ' + icon);
  check(html.includes('/' + icon + '?v=20260811'), 'landing page does not use the versioned icon: ' + icon);
}
check(html.includes('sizes="any"') && html.includes('sizes="180x180"'), 'favicon size metadata is incomplete');

check(catalog.schema_version === 1, 'unknown catalog schema');
check(catalog.counts.documents === catalog.documents.length, 'document count does not match catalog');
check(catalog.counts.papers === 16, 'the current English paper inventory should contain 16 papers');
check(catalog.counts.open_shells === 16, 'the current English open-shell inventory should contain 16 papers');
check(catalog.counts.languages === 3, 'the catalog should expose EN, PT and ES');
check(catalog.documents.every((d) => d.path && d.href && d.title && d.language && d.kind && d.state), 'catalog has incomplete records');
check(catalog.documents.every((d) => !d.path.includes('..') && d.href.startsWith('/')), 'catalog has an unsafe path');

const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
try { JSON.parse(jsonLd && jsonLd[1]); check(true, 'structured data parses'); }
catch (_) { check(false, 'structured data is invalid JSON'); }

if (failures.length) {
  failures.forEach((item) => console.error('FAIL: ' + item));
  console.error(failures.length + ' of ' + checks + ' checks failed');
  process.exit(1);
}
console.log(checks + ' Dknowledger site checks passed');

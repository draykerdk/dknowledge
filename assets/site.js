(function () {
  'use strict';

  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const modes = ['auto', 'dark', 'light'];

  function resolved(mode) {
    if (mode !== 'auto') return mode;
    return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(mode) {
    const value = modes.includes(mode) ? mode : 'auto';
    root.dataset.theme = resolved(value);
    if (toggle) toggle.textContent = value.toUpperCase();
    try { localStorage.setItem('dknowledger-theme', value); } catch (_) {}
  }

  let selected = 'auto';
  try { selected = localStorage.getItem('dknowledger-theme') || 'auto'; } catch (_) {}
  applyTheme(selected);
  if (toggle) toggle.addEventListener('click', function () {
    selected = modes[(modes.indexOf(selected) + 1) % modes.length];
    applyTheme(selected);
  });

  const list = document.querySelector('[data-doc-list]');
  const state = document.querySelector('[data-catalog-state]');
  const filters = Array.from(document.querySelectorAll('[data-filter]'));
  let documents = [];
  let active = 'all';

  function matches(doc) {
    if (active === 'all') return doc.language === 'en';
    if (active === 'paper') return doc.kind === 'paper' && doc.language === 'en';
    return doc.state === active && doc.language === 'en';
  }

  function row(doc) {
    const a = document.createElement('a');
    a.className = 'doc-row';
    a.href = doc.href;
    a.innerHTML = '<span class="doc-state ' + doc.state + '">' + doc.state.toUpperCase() + '</span>'
      + '<span class="doc-title"></span><span class="doc-path"></span><b>→</b>';
    a.querySelector('.doc-title').textContent = doc.title;
    a.querySelector('.doc-path').textContent = doc.path;
    return a;
  }

  function render() {
    if (!list) return;
    list.textContent = '';
    const shown = documents.filter(matches).slice(0, 80);
    shown.forEach(function (doc) { list.appendChild(row(doc)); });
    if (!shown.length) {
      const p = document.createElement('p');
      p.className = 'loading';
      p.textContent = 'No documents match this view.';
      list.appendChild(p);
    }
    if (state) state.textContent = shown.length + ' DOCUMENTS SHOWN';
  }

  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      active = button.dataset.filter;
      filters.forEach(function (item) { item.classList.toggle('active', item === button); });
      render();
    });
  });

  fetch('/data/catalog.json', { cache: 'no-cache' })
    .then(function (response) { if (!response.ok) throw new Error('HTTP ' + response.status); return response.json(); })
    .then(function (catalog) {
      documents = catalog.documents || [];
      const values = [catalog.counts.documents, catalog.counts.papers, catalog.counts.open_shells, catalog.counts.languages];
      document.querySelectorAll('[data-metrics] strong').forEach(function (node, index) { node.textContent = values[index] == null ? '—' : values[index]; });
      render();
    })
    .catch(function () {
      if (state) state.textContent = 'SOURCE TREE UNAVAILABLE';
      if (list) list.innerHTML = '<p class="loading">The generated inventory could not be loaded. Read the <a href="/CURRENT.html">current orientation</a> or inspect the <a href="https://github.com/draykerdk/dknowledge">repository directly</a>.</p>';
    });
})();

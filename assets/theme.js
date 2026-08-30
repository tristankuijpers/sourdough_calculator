// ---------------------------------------------------------------------------
// Light / dark theme for the whole site.
//
// Persisted in localStorage under SDCH_THEME ('light' | 'dark'). When nothing
// has been stored yet, the theme follows the browser/OS preference via the
// prefers-color-scheme media query (the CSS already does the colouring; this
// file only needs to keep the toggle button and the theme-color meta in sync).
//
// The early, paint-time <html data-theme> is set by a tiny inline script in
// each page <head> (so there's no flash); this file handles interaction and
// live updates.
// ---------------------------------------------------------------------------
(function () {
  'use strict';

  var KEY = 'SDCH_THEME';
  var mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)');
  var root = document.documentElement;

  function resolved() {
    var t = root.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') return t;
    return (mql && mql.matches) ? 'light' : 'dark';
  }

  function themeColor() { return resolved() === 'light' ? '#f5eddd' : '#1c160f'; }

  function applyMeta() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', themeColor());
  }

  function label() {
    var base = (window.I18N && I18N.t) ? I18N.t('themeToggle') : 'Light/dark theme';
    return base + ' — ' + resolved();
  }

  function setBtn() {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(resolved() === 'light'));
      var t = label();
      btn.setAttribute('title', t);
      btn.setAttribute('aria-label', t);
    });
  }

  function setTheme(val) {
    try {
      if (val === 'light' || val === 'dark') {
        localStorage.setItem(KEY, val);
        root.setAttribute('data-theme', val);
      } else {
        localStorage.removeItem(KEY);
        root.removeAttribute('data-theme');
      }
    } catch (e) {}
    applyMeta();
    setBtn();
  }

  function attach() {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      if (btn.dataset.wired) return;
      btn.dataset.wired = '1';
      btn.addEventListener('click', function () {
        setTheme(resolved() === 'light' ? 'dark' : 'light');
      });
    });
  }

  // While the visitor is on the system default (no explicit data-theme), a
  // change in OS/browser preference should be reflected immediately.
  if (mql && mql.addEventListener) {
    mql.addEventListener('change', function () {
      if (!root.hasAttribute('data-theme')) { applyMeta(); setBtn(); }
    });
  }

  function boot() {
    applyMeta();
    setBtn();
    attach();
  }

  if (document.readyState !== 'loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
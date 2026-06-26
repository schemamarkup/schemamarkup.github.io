(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  (function pageLoader() {
    var loader = document.getElementById('pageLoader');
    if (!loader) return;
    setTimeout(function () { loader.classList.add('hidden'); }, 500);
  })();

  (function scrollHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          header.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  })();

  const menuToggle = $('#menuToggle');
  const mobileNav = $('#mobileNav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      const open = mobileNav.classList.toggle('open');
      mobileNav.hidden = !open;
      menuToggle.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    $$('#mobileNav a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        mobileNav.hidden = true;
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

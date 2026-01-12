/**
 * Alakuijala.fi - Main JavaScript
 * Handles mobile navigation and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    // Toggle mobile menu open/close
    navToggle.addEventListener('click', function() {
      if (navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.textContent = '☰ Valikko';
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('is-open');
        navToggle.textContent = '✕ Sulje';
        navToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('is-open');
        navToggle.textContent = '☰ Valikko';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
      toggle.textContent = nav.classList.contains('nav-open') ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('nav-open');
        toggle.textContent = '☰';
      });
    });
  }
});

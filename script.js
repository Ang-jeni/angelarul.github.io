// Interactive JS for portfolio: typed effect, nav toggle, active links, contact form demo
document.addEventListener('DOMContentLoaded', function() {
  // Typed.js for tagline
  if (window.Typed) {
    new Typed('#typed', {
      strings: ['AI Developer', 'Data Scientist', 'Web Innovator'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1400,
      loop: true
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelectorAll('.nav-toggle');
  navToggle.forEach(btn => {
    btn.addEventListener('click', () => {
      const navList = document.querySelector('.nav-list');
      navList.classList.toggle('show');
    });
  });

  // Highlight active nav link based on URL
  const links = document.querySelectorAll('.nav-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(l => {
    if (l.getAttribute('href') === current) {
      l.classList.add('active');
    } else {
      l.classList.remove('active');
    }
  });

  // Smooth scroll for same-page anchors (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Contact form demo
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // collect data (demo)
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      // Basic front-end validation
      if (!name || name.toString().trim().length < 2) {
        alert('Please enter your name.');
        return;
      }
      // In a real site you'd send data to your backend or email API
      alert('Thanks, ' + name + '! Your message has been received (demo). I will reach out soon.');
      contactForm.reset();
    });
  }
});
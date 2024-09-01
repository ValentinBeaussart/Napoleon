window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const fadeInElements = document.querySelectorAll('.fade-in-element');

  const revealOnScroll = () => {
    fadeInElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const isVisible = elementTop < window.innerHeight - 100;

      if (isVisible) {
        element.classList.add('fade-in-visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
});

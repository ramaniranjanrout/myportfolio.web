let typed = new Typed('#element', {
  strings: ['Web Developer', 'Programmer','Video Editor','Web Designer'],
  typeSpeed: 50,
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


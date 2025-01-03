// Add 'navbar-scrolled' class when the page is scrolled down
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
  } else {
      navbar.classList.remove('navbar-scrolled');
  }
});

// Form submission animation (fake)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const submitButton = document.querySelector('.contact-form button');
  submitButton.innerHTML = 'Sending...';
  submitButton.setAttribute('disabled', true);

  // Simulate form submission
  setTimeout(function() {
      alert('Your message has been sent!');
      submitButton.innerHTML = 'Send';
      submitButton.removeAttribute('disabled');
  }, 2000);
});

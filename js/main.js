// Toggle Dark Mode
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menuToggle');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// EmailJS Submit
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('service_chandragmail', 'template_uafuvh9', this)
    .then(() => {
      alert('Pesan berhasil dikirim!');
      contactForm.reset();
    }, (error) => {
      alert('Gagal mengirim pesan, coba lagi nanti.');
      console.error('EmailJS Error:', error);
    });
});

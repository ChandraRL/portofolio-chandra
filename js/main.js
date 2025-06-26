// Toggle Dark Mode
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menuToggle');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// EmailJS
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  emailjs.sendForm('service_chandragmail', 'template_uafuvh9', contactForm)
    .then(() => {
      alert('Pesan berhasil dikirim!');
      contactForm.reset();
    })
    .catch((error) => {
      alert('Gagal mengirim pesan. Coba lagi nanti.');
      console.error('EmailJS Error:', error);
    });
});

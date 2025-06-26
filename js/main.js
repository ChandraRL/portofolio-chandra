document.addEventListener('DOMContentLoaded', () => {
  // === Toggle Dark Mode ===
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Function to set dark mode based on current state
  const setDarkModeText = () => {
    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️ Light Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      darkModeToggle.textContent = '🌙 Dark Mode';
      localStorage.setItem('theme', 'light');
    }
  };

  // Check for saved theme preference on load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  setDarkModeText(); // Set initial text content

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    setDarkModeText();
  });

  // === Toggle Hamburger Menu ===
  const hamburger = document.getElementById('hamburger');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelectorAll('#menuToggle a'); // Get all nav links

  hamburger.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    // Toggle aria-expanded for accessibility
    const isExpanded = menuToggle.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
  });

  // Close hamburger menu when a nav link is clicked (for smoother UX on mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle.classList.contains('active')) {
        menuToggle.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close hamburger menu when clicking outside (optional, but good for UX)
  document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !hamburger.contains(event.target) && menuToggle.classList.contains('active')) {
      menuToggle.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });


  // === Scroll to Top Button ===
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    // Show button when scrolled down 200px, hide otherwise
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  });

  // === EmailJS Contact Form ===
  // EmailJS initialization is done in index.html script tag

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Display a temporary loading message or disable button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Mengirim...';
    submitButton.disabled = true;

    emailjs.sendForm('service_chandragmail', 'template_uafuvh9', contactForm)
      .then(() => {
        alert('Pesan berhasil dikirim! Terima kasih.');
        contactForm.reset(); // Clear form fields
      })
      .catch((error) => {
        alert('Gagal mengirim pesan. Silakan coba lagi nanti.');
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        submitButton.textContent = originalButtonText; // Restore button text
        submitButton.disabled = false; // Re-enable button
      });
  });
});
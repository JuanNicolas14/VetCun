document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('podcast-modal');
  const openButtons = document.querySelectorAll('[data-modal-open]');
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

  const openModal = () => {
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    }
  };

  const closeModal = () => {
    if (modal.open) {
      modal.close();
    }
  };

  openButtons.forEach((button) => button.addEventListener('click', openModal));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

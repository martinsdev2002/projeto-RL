const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

document.querySelectorAll('.heart').forEach((button) => {
  button.addEventListener('click', () => {
    const active = button.classList.toggle('active');
    button.setAttribute('aria-pressed', String(active));
    button.textContent = active ? '♥' : '♡';
  });
});

document.querySelectorAll('[data-product]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#message').value = `Olá! Tenho interesse em conhecer a peça ${link.dataset.product}.`;
  });
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Preencha os campos para enviar sua mensagem.';
    form.reportValidity();
    return;
  }
  const name = document.querySelector('#name').value.trim();
  status.textContent = `Obrigado, ${name}! Recebemos sua mensagem e responderemos em breve.`;
  form.reset();
});
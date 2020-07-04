const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]',
);
const backdrop = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', handleBackdropClick);

function openModal() {
  document.body.classList.add('show-modal');
}

function closeModal() {
  document.body.classList.remove('show-modal');
}

function handleBackdropClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closeModal();
}
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-ingridients-open]'),
    closeModalBtn: document.querySelector('[data-modal-ingridients-close]'),
    modal: document.querySelector('[data-modal-ingridients]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal-is-hidden');
  }
})();

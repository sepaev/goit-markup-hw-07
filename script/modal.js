(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop__is-hidden');

    const isModalHidden = refs.modal.classList.contains('backdrop__is-hidden');
    const method = isModalHidden ? "enableBodyScroll" : "disableBodyScroll";
    bodyScrollLock[method](refs.modal);
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }

  console.log(toggleModal);
})();

// const openBtn = document.querySelector('.btn');
// const closeBtn = document.querySelector('.modal__close-btn');
// const modal = document.querySelector('.backdrop');

// const open = openBtn.addEventListener('click', toggle);

// const close = closeBtn.addEventListener('click', toggle);

// function toggle(e) {
//   modal.classList.toggle('is-hidden');
// }

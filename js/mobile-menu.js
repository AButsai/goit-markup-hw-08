(() => {
  const menuBtnRef = document.querySelector('.menu__button');
  const mobileMenuRef = document.querySelector('.header__menu');
  const mobileMenuOverflow = document.querySelector('body');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileMenuOverflow.classList.toggle('menu-open');
  });
})();

// const openMenu = document.querySelector('.menu__open');
// const closeMenu = document.querySelector('.menu__close');
// const buttonMenu = document.querySelector('.menu__button');

// const openMenuMobile = openMenu.addEventListener('click', toggleMenu);
// const closeMenuMobile = closeMenu.addEventListener('click', toggleMenu);

// function toggleMenu(e) {
//   buttonMenu.classList.toggle('is-open');
// }

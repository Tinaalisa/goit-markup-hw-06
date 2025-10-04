(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.body,
  };

  const toggleMenu = () => {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  };

  refs.openBtn.addEventListener('click', toggleMenu);
  refs.closeBtn.addEventListener('click', toggleMenu);

    refs.menu.addEventListener('click', (e) => {
    if (e.target === refs.menu) toggleMenu();
  });
})();
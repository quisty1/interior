const burger = document.querySelector('.menu__icon'),
  menu = document.querySelector('.nav__list'),
  body = document.body;

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  })
}
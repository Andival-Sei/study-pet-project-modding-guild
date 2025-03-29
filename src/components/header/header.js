// Функциональность бургер-меню
export function initBurgerMenu() {
  const burgerBtn = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  
  if (!burgerBtn || !nav) return;

  // Обработчик клика по бургер-кнопке
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Блокируем прокрутку страницы при открытом меню
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll('.header__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });

  // Закрытие меню при изменении размера окна
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
      burgerBtn.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
}
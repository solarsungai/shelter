const petsSliderCard = document.querySelector ('.pets-slider-card');
const mainModal = document.querySelector ('.modal-window-blackout');
const closeButton = document.querySelector ('.modal-close-button');

petsSliderCard.addEventListener ('click', () => {
    mainModal.classList.toggle ('hidden')
})

closeButton.addEventListener ('click', () => {
    mainModal.classList.toggle ('hidden')
})

mainModal.addEventListener ('click', (event) => {
    if (event.target.classList.contains('modal-window-blackout') || event.target.classList.contains('modal-close-button-area')) {
       mainModal.classList.toggle ('hidden')
    }
})






console.log(`
    Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n
    блок <header>: +2\n
    блок Not only: +2\n
    блок About: +2\n
    блок Our Friends: +2\n
    блок Help: +2\n
    блок In addition: +2\n
    блок <footer>: +2\n
    Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n
    блок <header>: +2\n
    блок Not only: +2\n
    блок About: +2\n
    блок Our Friends: +2\n
    блок Help: +2\n
    блок In addition: +2\n
    блок <footer>: +2\n
    Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n
    блок <header>: +2\n
    блок Not only: +2\n
    блок About: +2\n
    блок Our Friends: +2\n
    блок Help: +2\n
    блок In addition: +2\n
    блок <footer>: +2\n
    Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n
    блок <header>: +2\n
    блок Our Friends: +2\n
    блок <footer>: +2\n
    Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n
    блок <header>: +2\n
    блок Our Friends: +2\n
    блок <footer>: +2\n
    Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n
    блок <header>: +2\n
    блок Our Friends: +2\n
    блок <footer>: +2\n
    Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, не появляются белые поля. Контент не обрезается и не удаляется: +20\n
    нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5\n
    нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5\n
    нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5\n
    нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5\n
    Верстка резиновая: при изменении размера экрана от 1280px до 320px верстка подстраивается, элементы не наезжают друг на друга, изображения сохраняют пропорции +8\n
    на странице Main: +4\n
    на странице Pets: +4\n
    При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n
    Верстка обеих страниц валидная +8\n
    `);

/* BURGER menu script STARTS HERE */

const menu = document.querySelector('.header-nav');
const burgerIcon = document.querySelector('.header-burger-ico');
const blackout = document.querySelector('.header-nav-blackout');
const body = document.body;

burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    burgerIcon.classList.toggle('icon-rotate');
    blackout.classList.toggle('hidden');
    body.classList.toggle('no-scroll');
});

blackout.addEventListener('click', () => {
    menu.classList.remove('menu-open');
    burgerIcon.classList.remove('icon-rotate');
    blackout.classList.add('hidden');
    body.classList.toggle('no-scroll');
});

/* POPUP window script STARTS HERE */

const mainModal = document.querySelector ('.modal-window-blackout');
const modal = document.querySelector ('.modal-window');
const modalImage = modal.querySelector ('.modal-image');
const modalTitle = modal.querySelector ('.modal-title');
const modalSubtitle = modal.querySelector ('.modal-subtitle');
const modalDescription = modal.querySelector ('.modal-discription');
const modalList = modal.querySelector ('.modal-list');
const closeButton = document.querySelector ('.modal-close-button');

function updateModalContent(pet) {
    modalImage.style.backgroundImage = `url(${pet.img})`;
    modalTitle.textContent = pet.name;
    modalSubtitle.textContent = `${pet.type} - ${pet.breed}`;
    modalDescription.textContent = pet.description;
  
     modalList.innerHTML = `
        <li class="modal-list-item"><b>Age:</b> ${pet.age}</li>
        <li class="modal-list-item"><b>Inoculations:</b> ${pet.inoculations.join(', ')}</li>
        <li class="modal-list-item"><b>Diseases:</b> ${pet.diseases.join(', ')}</li>
        <li class="modal-list-item"><b>Parasites:</b> ${pet.parasites.join(', ')}</li>
    `;
};

function attachCardClickEvents() {
    const sliderCards = document.querySelectorAll('.slider-card-item');
    sliderCards.forEach(card => {
        card.addEventListener('click', () => {
            const cardTitle = card.querySelector('.pets-slider-card-title').textContent;
            const pet = petsDescription.find(pet => pet.name === cardTitle);

            if (pet) {
                updateModalContent(pet);
                mainModal.classList.remove('hidden');
            }
        });
    });
}

function attachModalEvents() {
    closeButton.addEventListener('click', () => {
        mainModal.classList.add('hidden');
    });

    mainModal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-window-blackout') || event.target.classList.contains('modal-close-button-area')) {
            mainModal.classList.add('hidden');
        }
    });
}

function initialize() {
    attachCardClickEvents();
    attachModalEvents();
}
document.addEventListener('DOMContentLoaded', initialize);
  

/* SLIDER script STARTS HERE */

const sliderCardContainer = document.querySelector('.slider-cards');
const leftBtn = document.querySelector('.left-slider-button');
const rightBtn = document.querySelector('.right-slider-button');

const pets = [
    { name: 'Katrine', img: 'img/pets-katrine.png', alt: 'Cat Katrine' },
    { name: 'Jennifer', img: 'img/pets-jennifer.png', alt: 'Puppy Jennifer' },
    { name: 'Woody', img: 'img/pets-woody.png', alt: 'Dog Woody' },
    { name: 'Sophia', img: 'img/pets-sophia.png', alt: 'Puppy Sophia' },
    { name: 'Timmy', img: 'img/pets-timmy.png', alt: 'Cat Timmy' },
    { name: 'Charly', img: 'img/pets-charly.png', alt: 'Dog Charly' },
    { name: 'Scarlett', img: 'img/pets-scarlett.png', alt: 'Puppy Scarlett' },
    { name: 'Freddie', img: 'img/pets-freddie.png', alt: 'Cat Freddie' }
];

let previousPets = [];
let currentPets = [];

function getRandomPets() {
    let availablePets = pets.filter(pet => !previousPets.includes(pet));
    let newPets = [];
    while (newPets.length < 3 && availablePets.length > 0) {
        const randomIndex = Math.floor(Math.random() * availablePets.length);
        newPets.push(availablePets[randomIndex]);
        availablePets.splice(randomIndex, 1);
    }
    return newPets;
}

function updateSlider(petsToShow) {
    sliderCardContainer.innerHTML = '';
    petsToShow.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'slider-card-item';
        card.innerHTML = `
            <img src="${pet.img}" alt="${pet.alt}">
            <p class="pets-slider-card-title">${pet.name}</p>
            <a href="pets.html" class="learn-more-button">Learn more</a>
        `;
        sliderCardContainer.appendChild(card);
    });
    attachCardClickEvents(); 
}

currentPets = getRandomPets();
updateSlider(currentPets);

rightBtn.addEventListener('click', () => {
    previousPets = currentPets;
    currentPets = getRandomPets();
    updateSlider(currentPets);
});

leftBtn.addEventListener('click', () => {
    let temp = currentPets;
    currentPets = previousPets;
    previousPets = temp;
    updateSlider(currentPets);
});












/* GRADE info script STARTS HERE */

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

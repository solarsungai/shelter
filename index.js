/* BURGER menu script STARTS HERE */

const menu = document.querySelector('.header-nav');
const burgerIcon = document.querySelector('.header-burger-ico');
const blackout = document.querySelector('.header-nav-blackout');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link, .nav-link-1');

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

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        burgerIcon.classList.remove('icon-rotate');
        blackout.classList.add('hidden');
        body.classList.remove('no-scroll');
    });
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
    sliderCardContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.slider-card-item');
        if (card) {
            const cardTitle = card.querySelector('.pets-slider-card-title').textContent;
            const pet = petsDescription.find(pet => pet.name === cardTitle);

            if (pet) {
                updateModalContent(pet);
                mainModal.classList.remove('hidden');
                document.body.classList.add('no-scroll');
            }
        }
    });
}

function attachModalEvents() {
    closeButton.addEventListener('click', () => {
        mainModal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });

    mainModal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-window-blackout') || event.target.classList.contains('modal-close-button-area')) {
            mainModal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    });
}

function initialize() {
    attachCardClickEvents();
    attachModalEvents();
}

document.addEventListener('DOMContentLoaded', () => {
    initialize();
    attachCardClickEvents();
});
  

/* SLIDER script STARTS HERE */

const sliderCardContainer = document.querySelector('.slider-cards');
const leftCards = document.querySelector('.slider-cards-left');
const activeCards = document.querySelector('.slider-cards-active');
const rightCards = document.querySelector('.slider-cards-right');
const leftBtn = document.querySelector('.left-slider-button');
const rightBtn = document.querySelector('.right-slider-button');
const leftBtn320 = document.querySelector('.slider-button-320:first-child');
const rightBtn320 = document.querySelector('.slider-button-320:last-child');

const pets = [
    { name: 'Katrine', img: 'img/pets-katrine.png', alt: 'Cat Katrine' },
    { name: 'Jennifer', img: 'img/pets-jennifer.png', alt: 'Puppy Jennifer' },
    { name: 'Woody', img: 'img/pets-woody.png', alt: 'Dog Woody' },
    { name: 'Sophia', img: 'img/pets-sophia.png', alt: 'Puppy Sophia' },
    { name: 'Timmy', img: 'img/pets-timmy.png', alt: 'Cat Timmy' },
    { name: 'Charly', img: 'img/pets-charly.png', alt: 'Dog Charly' },
    { name: 'Scarlett', img: 'img/pets-scarlett.png', alt: 'Puppy Scarlett' },
    { name: 'Freddie', img: 'img/pets-freddie.png', alt: 'Cat Freddie' },
];

const getRandomPet = (num, excludePets) => {
    const availablePets = pets.filter(pet => !excludePets.includes(pet));
    const shuffledPets = availablePets.sort(() => 0.5 - Math.random());
    return shuffledPets.slice(0, num);
};

const createSliderItem = (pet) => {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-card-item');

    sliderItem.innerHTML = `
    <img src="${pet.img}" alt="${pet.alt}">
    <p class="pets-slider-card-title">${pet.name}</p>
    <div class="learn-more-button">Learn more</div>`;

    return sliderItem;
};

const sliderToLeft = () => {
    sliderCardContainer.classList.add('move-left');
};

const sliderToRight = () => {
    sliderCardContainer.classList.add('move-right');
};

const buttonListeners = () => {
    if (window.matchMedia('(max-width: 320px)').matches) {
        leftBtn.removeEventListener('click', sliderToLeft);
        rightBtn.removeEventListener('click', sliderToRight);
        leftBtn320.addEventListener('click', sliderToLeft);
        rightBtn320.addEventListener('click', sliderToRight);
    } else {
        leftBtn320.removeEventListener('click', sliderToLeft);
        rightBtn320.removeEventListener('click', sliderToRight);
        leftBtn.addEventListener('click', sliderToLeft);
        rightBtn.addEventListener('click', sliderToRight);
    }
};

sliderCardContainer.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'slider-to-left') {
        sliderCardContainer.classList.remove('move-left');
        rightCards.innerHTML = activeCards.innerHTML;
        activeCards.innerHTML = leftCards.innerHTML;
        leftCards.innerHTML = '';
        const getCurrentPets = () => {
            return [...activeCards.querySelectorAll('.slider-card-item')].map(item => {
                const petName = item.querySelector('.pets-slider-card-title').textContent;
                return pets.find(pet => pet.name === petName);
            });
        };
        const newPets = getRandomPet(3, getCurrentPets());
        newPets.forEach(pet => leftCards.appendChild(createSliderItem(pet)));
    } else if (animationEvent.animationName === 'slider-to-right') {
        sliderCardContainer.classList.remove('move-right');
        leftCards.innerHTML = activeCards.innerHTML;
        activeCards.innerHTML = rightCards.innerHTML;
        rightCards.innerHTML = '';
        const getCurrentPets = () => {
            return [...activeCards.querySelectorAll('.slider-card-item')].map(item => {
                const petName = item.querySelector('.pets-slider-card-title').textContent;
                return pets.find(pet => pet.name === petName);
            });
        };
        const newPets = getRandomPet(3, getCurrentPets());
        newPets.forEach(pet => rightCards.appendChild(createSliderItem(pet)));
    }
});

const newActiveCards = () => {
    activeCards.innerHTML = '';
    const newPets = getRandomPet(3, []);
    newPets.forEach(pet => activeCards.appendChild(createSliderItem(pet)));
};

const updateSliderStyles = () => {
    const activeCardWidth = activeCards.offsetWidth;
    const sliderWidth = activeCardWidth + parseFloat(getComputedStyle(sliderCardContainer).gap);
    document.documentElement.style.setProperty('--slider-width', `-${sliderWidth}px`);
};

window.addEventListener('load', updateSliderStyles);
window.addEventListener('resize', updateSliderStyles);
window.addEventListener('load', newActiveCards);
window.addEventListener('load', buttonListeners);
window.addEventListener('resize', buttonListeners);


/* GRADE info script STARTS HERE */

console.log(`
    1. Реализация burger menu на обеих страницах: +26\n
    \n
    при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2\n
    при нажатии на иконку справа появляется меню шириной 320px, иконка поворачивается: +4\n
    высота адаптивного меню занимает всю высоту экрана: +2\n
    при повторном нажатии на иконку или свободное пространство меню скрывается и иконка поворачивается: +4\n
    бургер-иконка создана при помощи html+css, без использования изображений: +2\n
    ссылки в адаптивном меню работают: +2\n
    при клике по любой ссылке меню скрывается, иконка поворачивается: +2\n
    расположение и размеры элементов в бургер-меню соответствует макету: +2\n
    область, свободная от бургер-меню, затемняется: +2\n
    страница под бургер-меню не прокручивается: +4\n
    \n
    2. Реализация слайдера-карусели на странице Main: +36\n
    при нажатии на стрелки происходит переход к новому блоку элементов: +4\n
    смена блоков происходит с соответствующей анимацией карусели: +4\n
    слайдер бесконечен: +4\n
    при переключении влево или вправо прокручивается 3 карточки для 1280px, 2 для 768px, 1 для 320px): +4\n
    новый слайд содержит псевдослучайный набор карточек, формируется со следующими условиями:\n
    - в текущем блоке слайда карточки с питомцами не повторяются: +4\n
    - в следующем блоке нет дублирования карточек с текущим блоком: +4\n
    - сохраняется только одно предыдущее состояние: +4\n
    - при каждой перезагрузке страницы формируется новая последовательность карточек: +2\n
    - генерация наборов карточек происходит на основе 8 объектов с данными о животных: +2\n
    при изменении ширины экрана слайдер перестраивается и работает без перезагрузки страницы: +4\n
    \n
    3. Реализация пагинации на странице Pets: +36\n
    при перезагрузке страницы всегда открывается первая страница пагинации: +2\n
    при нажатии кнопок > или < открывается следующая или предыдущая страница пагинации: +2\n
    при нажатии кнопок >> или << открывается последняя или первая страница пагинации: +2\n
    при открытии первой страницы кнопки << и < неактивны: +2\n
    при открытии последней страницы кнопки > и >> неактивны: +2\n
    в кружке по центру указан номер текущей страницы: +2\n
    каждая страница пагинации содержит псевдослучайный набор питомцев, формируется со следующими условиями:\n
    - при загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз: +4\n
    - при каждой перезагрузке страницы формируется новый массив со случайной последовательностью: +4\n
    - карточки питомцев не должны повторяться на одной странице: +4\n
    - при переключении страницы данные меняются: +4\n
    - при неизменных размерах области пагинации, возвращаясь на страницу под определенным номером, контент будет одинаков: +2\n
    - общее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц: +2\n
    при изменении ширины экрана пагинация перестраивается и работает без перезагрузки страницы : +4\n
    \n
    4. Реализация попап на обеих страницах: +12\n
    попап появляется при нажатии на любое место карточки с описанием конкретного животного: +2\n
    часть страницы вне попапа затемняется: +2\n
    при открытии попапа вертикальный скролл становится неактивным, при закрытии - активным: +2\n
    при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается: +2\n
    кнопка с крестиком интерактивная: +2\n
    окно попапа центрировано по всем осям, размеры элементов и их расположение совпадают с макетом: +2\n
    `);
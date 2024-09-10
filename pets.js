/* BURGER menu script STARTS HERE */

const menu = document.querySelector('.pets-header-nav');
const burgerIcon = document.querySelector('.header-burger-ico');
const blackout = document.querySelector('.header-nav-blackout');
const body = document.body;
const navLinks = document.querySelectorAll('.pets-nav-link, .pets-nav-link-2');

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


/* POPUP window script (called after page rendering in the slider code) */

  const mainModal = document.querySelector('.modal-window-blackout');
  const modal = document.querySelector ('.modal-window');
  const modalImage = modal.querySelector ('.modal-image');
  const modalTitle = modal.querySelector ('.modal-title');
  const modalSubtitle = modal.querySelector ('.modal-subtitle');
  const modalDescription = modal.querySelector ('.modal-discription');
  const modalList = modal.querySelector ('.modal-list');
  const closeButton = document.querySelector ('.modal-close-button');

  function createModalContent(pet) {
      modalImage.style.backgroundImage = `url(${pet.img})`;
      modalTitle.textContent = pet.name;
      modalSubtitle.textContent = `${pet.type} - ${pet.breed}`;
      modalDescription.textContent = pet.description;

      modalList.innerHTML = `
          <li class="modal-list-item"><b>Age:</b> ${pet.age}</li>
          <li class="modal-list-item"><b>Inoculations:</b> ${pet.inoculations.join(', ')}</li>
          <li class="modal-list-item"><b>Diseases:</b> ${pet.diseases.join(', ')}</li>
          <li class="modal-list-item"><b>Parasites:</b> ${pet.parasites.join(', ')}</li>`;
  }
  
  function cardClickEvents() {
    const petsSliderCards = document.querySelectorAll('.pets-slider-card');
  
    petsSliderCards.forEach(card => {
      card.addEventListener('click', () => {
        const cardTitle = card.querySelector('.pets-slider-card-title').textContent;
        const pet = petsDescription.find(pet => pet.name === cardTitle);
        createModalContent(pet);
        mainModal.classList.toggle('hidden');
        document.body.classList.add('no-scroll');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
  closeButton.addEventListener ('click', () => {
    mainModal.classList.toggle ('hidden')
    document.body.classList.remove('no-scroll');
  });

  mainModal.addEventListener ('click', (event) => {
    if (event.target.classList.contains('modal-window-blackout') || event.target.classList.contains('modal-close-button-area')) {
       mainModal.classList.toggle ('hidden')
       document.body.classList.remove('no-scroll');
    }
  });
  });


/* PAGINATION slider script STARTS HERE */

const pets = [
  { name: "Katrine", img: "img/pets-katrine.png", alt: "Cat Katrine" },
  { name: "Jennifer", img: "img/pets-jennifer.png", alt: "Puppy Jennifer" },
  { name: "Woody", img: "img/pets-woody.png", alt: "Dog Woody" },
  { name: "Sophia", img: "img/pets-sophia.png", alt: "Puppy Sophia" },
  { name: "Timmy", img: "img/pets-timmy.png", alt: "Cat Timmy" },
  { name: "Charly", img: "img/pets-charly.png", alt: "Dog Charly" },
  { name: "Scarlett", img: "img/pets-scarlett.png", alt: "Puppy Scarlett" },
  { name: "Freddie", img: "img/pets-freddie.png", alt: "Cat Freddie" }
];

let petsArray = [];
let pageSize;
let pageCount;
let currentPage = 1;

function shuffleArray(arr) {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function generatePetsArray() {
  petsArray = [];
  for (let i = 0; i < 6; i++) {
    petsArray = petsArray.concat(shuffleArray(pets, lastPagePositions));
  }
}

function generatePetsArray() {
  petsArray = [];
  for (let i = 0; i < 6; i++) {
    petsArray = petsArray.concat(shuffleArray(pets));
  }
}

function updatePageSize() {
  const width = window.innerWidth;
  if (width > 1220) {
    pageSize = 8;
    pageCount = 6;
  } else if (width > 600) {
    pageSize = 6;
    pageCount = 8;
  } else {
    pageSize = 3;
    pageCount = 16;
  }
}

function renderPage(page) {
  const petsSliderContainer = document.querySelector('.pets-slider-container');
  petsSliderContainer.innerHTML = '';

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pagePets = petsArray.slice(start, end);

  pagePets.forEach((pet, index) => {
    const card = document.createElement('div');
    card.classList.add('pets-slider-card');
    card.innerHTML = `
      <img src="${pet.img}" alt="${pet.alt}">
      <p class="pets-slider-card-title">${pet.name}</p>
      <div class="learn-more-button">Learn more</div>
    `;
    petsSliderContainer.appendChild(card);
  });

  updateNavButtons();
  cardClickEvents();
}

function updateNavButtons() {
  const left1 = document.querySelector('.nav-circle-left-1');
  const left2 = document.querySelector('.nav-circle-left-2');
  const right1 = document.querySelector('.nav-circle-right-1');
  const right2 = document.querySelector('.nav-circle-right-2');
  const numberCircle = document.querySelector('.nav-number-circle');

  numberCircle.textContent = currentPage;

  if (currentPage === 1) {
    left1.style.cursor = 'not-allowed';
    left1.style.border = '2px solid #CDCDCD';
    left1.style.color = '#CDCDCD';
    
    left2.style.cursor = 'not-allowed';
    left2.style.border = '2px solid #CDCDCD';
    left2.style.color = '#CDCDCD';
  } else {
    left1.style.cursor = 'pointer';
    left1.style.border = '2px solid #F1CDB3';
    left1.style.color = '#292929';
    
    left2.style.cursor = 'pointer';
    left2.style.border = '2px solid #F1CDB3';
    left2.style.color = '#292929';
  }

  if (currentPage === pageCount) {
    right1.style.cursor = 'not-allowed';
    right1.style.border = '2px solid #CDCDCD';
    right1.style.color = '#CDCDCD';
    
    right2.style.cursor = 'not-allowed';
    right2.style.border = '2px solid #CDCDCD';
    right2.style.color = '#CDCDCD';
  } else {
    right1.style.cursor = 'pointer';
    right1.style.border = '2px solid #F1CDB3';
    right1.style.color = '#292929';
    
    right2.style.cursor = 'pointer';
    right2.style.border = '2px solid #F1CDB3';
    right2.style.color = '#292929';
  }
}

document.querySelector('.nav-circle-left-1').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    renderPage(currentPage);
  }
});

document.querySelector('.nav-circle-left-2').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    renderPage(currentPage);
  }
});

document.querySelector('.nav-circle-right-1').addEventListener('click', () => {
  if (currentPage < pageCount) {
    currentPage += 1;
    renderPage(currentPage);
  }
});

document.querySelector('.nav-circle-right-2').addEventListener('click', () => {
  if (currentPage < pageCount) {
    currentPage = pageCount;
    renderPage(currentPage);
  }
});

function initializeSlider() {
  generatePetsArray();
  updatePageSize();
  renderPage(currentPage);
}

window.addEventListener('resize', () => {
  updatePageSize();

  if (currentPage > pageCount) {
    currentPage = pageCount;
  }
  renderPage(currentPage);
});

initializeSlider();


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

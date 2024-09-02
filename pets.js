/* POPUP window script STARTS HERE */

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

/* PAGINATION slider script STARTS HERE */

const pets = [
    { name: "Katrine", img: "img/pets-katrine.png", alt: "Cat Katrine" },
    { name: "Jennifer", img: "img/pets-jennifer.png", alt: "Puppy Jennifer" },
    { name: "Woody", img: "img/pets-woody.png", alt: "Dog Woody" },
    { name: "Sophia", img: "img/pets-sophia.png", alt: "Puppy Sophia" },
    { name: "Timmy", img: "img/pets-timmy.png", alt: "Cat Timmy" },
    { name: "Charly", img: "img/pets-charly.png", alt: "Dog Charly" },
    { name: "Scarlett", img: "img/pets-scarlett.png", alt: "Puppy Scarlett" },
    { name: "Freddie", img: "img/pets-freddie.png", alt: "Cat Freddie" },
  ];

  function randomCard(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  function generatePages(pets, petsPerPage, totalPages) {
    const petsForPage = [];
    
    let previousPage = [];
  
    for (let i = 0; i < totalPages; i++) {
      const availablePets = [...pets];
      const currentPage = [];
      for (let j = 0; j < petsPerPage; j++) {
        const candidates = availablePets.filter(pet => pet !== previousPage[j]);
        const randomIndex = Math.floor(Math.random() * candidates.length);
        const selectedPet = candidates[randomIndex];
        currentPage.push(selectedPet);
        availablePets.splice(availablePets.indexOf(selectedPet), 1);
      }
      petsForPage.push(currentPage);
      previousPage = currentPage;
    }
  
    return petsForPage;
  };

let petsPerPage;
let totalPages;

if (window.innerWidth >= 1280) {
  petsPerPage = 8;
  totalPages = 6;
} else if (window.innerWidth >= 767) {
  petsPerPage = 6;
  totalPages = 8;
} else {
  petsPerPage = 3;
  totalPages = 16;
}

const pages = generatePages(pets, petsPerPage, totalPages);
let currentPage = 1;

function showPage(pageNumber) {
  const petsContainer = document.querySelector('.pets-slider-container');
  petsContainer.innerHTML = '';

  const pagePets = pages[pageNumber - 1];
  pagePets.forEach(pet => {
    petsContainer.innerHTML += `
      <div class="pets-slider-card">
        <img src="${pet.img}" alt="${pet.alt}">
        <p class="pets-slider-card-title">${pet.name}</p>
        <a href="pets.html" class="learn-more-button">Learn more</a>
      </div>`;
  });

  document.querySelector('.nav-number-circle').textContent = pageNumber;

  document.querySelector('.nav-circle-left-1').disabled = pageNumber === 1;
  document.querySelector('.nav-circle-left-2').disabled = pageNumber === 1;
  document.querySelector('.nav-circle-right-1').disabled = pageNumber === totalPages;
  document.querySelector('.nav-circle-right-2').disabled = pageNumber === totalPages;
};

showPage(currentPage);

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
};

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
};

function firstPage() {
  currentPage = 1;
  showPage(currentPage);
};

function lastPage() {
  currentPage = totalPages;
  showPage(currentPage);
};

document.querySelector('.nav-circle-left-1').addEventListener('click', firstPage);
document.querySelector('.nav-circle-left-2').addEventListener('click', prevPage);
document.querySelector('.nav-circle-right-1').addEventListener('click', nextPage);
document.querySelector('.nav-circle-right-2').addEventListener('click', lastPage);














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

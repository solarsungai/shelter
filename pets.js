/* BURGER menu script STARTS HERE */

const menu = document.querySelector('.pets-header-nav');
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

document.addEventListener('DOMContentLoaded', () => {
  const petsSliderCards = document.querySelectorAll ('.pets-slider-card');
  const mainModal = document.querySelector ('.modal-window-blackout');
  const modal = document.querySelector ('.modal-window');
  const modalImage = modal.querySelector ('.modal-image');
  const modalTitle = modal.querySelector ('.modal-title');
  const modalSubtitle = modal.querySelector ('.modal-subtitle');
  const modalDescription = modal.querySelector ('.modal-discription');
  const modalList = modal.querySelector ('.modal-list');
  const closeButton = document.querySelector ('.modal-close-button');

  petsSliderCards.forEach(card => {
    card.addEventListener('click', () => {
        const cardTitle = card.querySelector('.pets-slider-card-title').textContent;
        const pet = petsDescription.find(pet => pet.name === cardTitle);

        if (pet) {
            updateModalContent(pet);
            mainModal.classList.toggle ('hidden');
        }
    });

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
  }
  });
  closeButton.addEventListener ('click', () => {
    mainModal.classList.toggle ('hidden')
  });

  mainModal.addEventListener ('click', (event) => {
    if (event.target.classList.contains('modal-window-blackout') || event.target.classList.contains('modal-close-button-area')) {
       mainModal.classList.toggle ('hidden')
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

function initializeSlider() {
  generatePetsArray();
  updatePageSize();
  renderPage(currentPage);
}

function generatePetsArray() {
  petsArray = [];
  for (let i = 0; i < 6; i++) {
    petsArray = petsArray.concat(shuffleArray(pets));
  }
}

function updatePageSize() {
  const width = window.innerWidth;
  if (width >= 1280) {
    pageSize = 8;
    pageCount = 6;
  } else if (width >= 768) {
    pageSize = 6;
    pageCount = 8;
  } else {
    pageSize = 3;
    pageCount = 16;
  }
}

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
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
      <a href="pets.html" class="learn-more-button">Learn more</a>
    `;
    petsSliderContainer.appendChild(card);
  });

  updateNavButtons();
}

function updateNavButtons() {
  const left1 = document.querySelector('.nav-circle-left-1');
  const left2 = document.querySelector('.nav-circle-left-2');
  const right1 = document.querySelector('.nav-circle-right-1');
  const right2 = document.querySelector('.nav-circle-right-2');
  const numberCircle = document.querySelector('.nav-number-circle');

  numberCircle.textContent = currentPage;

  left1.style.cursor = currentPage === 1 ? 'not-allowed' : 'pointer';
  left2.style.cursor = currentPage === 1 ? 'not-allowed' : 'pointer';
  right1.style.cursor = currentPage === pageCount ? 'not-allowed' : 'pointer';
  right2.style.cursor = currentPage === pageCount ? 'not-allowed' : 'pointer';
}

document.querySelector('.nav-circle-left-1').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    renderPage(currentPage);
  }
});

document.querySelector('.nav-circle-left-2').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
});

document.querySelector('.nav-circle-right-1').addEventListener('click', () => {
  if (currentPage < pageCount) {
    currentPage++;
    renderPage(currentPage);
  }
});

document.querySelector('.nav-circle-right-2').addEventListener('click', () => {
  if (currentPage < pageCount) {
    currentPage = pageCount;
    renderPage(currentPage);
  }
});

window.addEventListener('resize', () => {
  const oldPageSize = pageSize;
  updatePageSize();

  if (currentPage > pageCount) {
    currentPage = pageCount;
  }

  renderPage(currentPage);
});

initializeSlider();
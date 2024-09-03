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










/* PAGINATION slider script STARTS HERE 

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
}

function generatePages(pets, petsPerPage, totalPages) {
  const petsForPage = [];
  for (let i = 0; i < totalPages; i++) {
    const currentPets = [...pets];
    randomCard(currentPets);
    petsForPage.push(currentPets.slice(0, petsPerPage));
  }
  return petsForPage;
}

let petsPerPage;
let totalPages;

function updatePetsPerPage() {
if (window.innerWidth >= 1280) {
  petsPerPage = 8;
  totalPages = 6;
} else if (window.innerWidth >= 768) {
  petsPerPage = 6;
  totalPages = 8;
} else {
  petsPerPage = 3;
  totalPages = 16;
}
}

updatePetsPerPage();
window.addEventListener('resize', updatePetsPerPage);

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
}

showPage(currentPage);

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function firstPage() {
  currentPage = 1;
  showPage(currentPage);
}

function lastPage() {
  currentPage = totalPages;
  showPage(currentPage);
}

document.querySelector('.nav-circle-left-1').addEventListener('click', firstPage);
document.querySelector('.nav-circle-left-2').addEventListener('click', prevPage);
document.querySelector('.nav-circle-right-1').addEventListener('click', nextPage);
document.querySelector('.nav-circle-right-2').addEventListener('click', lastPage);



*/
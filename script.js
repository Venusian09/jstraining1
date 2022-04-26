'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

const openModal = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

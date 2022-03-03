'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModals = document.querySelectorAll('.show-modal');
document;
const closebtnModel = document.querySelector('.close-modal');

const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModals.length; i++) {
  showModals[i].addEventListener('click', openModel);
}

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closebtnModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});

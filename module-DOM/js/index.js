'use strict';
// document.querySelector('selector'); - до першого совпд
// document.querySelectorAll('selector'); - всі з одної колекції

const magicButton = document.querySelector('button[data-action="magic"]');
const image = document.querySelector('.unsplash-image');
const menuItems = document.querySelectorAll('.menu-item');
const homeMenuItem = document.querySelector('.menu-item');

magicButton.addEventListener('click', () => {
  updateImage();
  toggleActiveItem();
});

function updateImage() {
  image.setAttribute('alt', 'lol');
  image.setAttribute(
    'src',
    'https://img.rl0.ru/90f1231a5572bfdbd47db5c617643602/c615x400i/news.rambler.ru/img/2019/09/11063154.258851.1598.jpg',
  );
}

function setActiveItem() {
  homeMenuItem.classList.add('active');
}

function toggleActiveItem() {
  homeMenuItem.classList.toggle('active');
}

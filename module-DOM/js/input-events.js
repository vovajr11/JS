// const input = document.querySelector('input-events-example > input');
// const output = document.querySelector('input-events-example > .output');

let clickCount = 0;

document.querySelector('.buttonlol').addEventListener('click', e => {
  const element = e.currentTarget;

  clickCount += 1;
  element.textContent = clickCount;
});

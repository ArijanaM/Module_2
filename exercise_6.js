'use strict';

const target = document.getElementById('target');
const diceRoll = () => Math.floor(Math.random() *6) + 1;


while (true) {
  let dice = diceRoll();
  if (dice !== 6) {
    target.innerHTML += `<li>${dice}</li>`;
  } else {
    target.innerHTML += `<li>${dice}</li>`;
    break;
  }
}

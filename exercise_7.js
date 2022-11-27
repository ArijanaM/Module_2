'use strict';

const target = document.getElementById('target');
const nrSides = Number(prompt('Max number: '));
const diceRoll = (nrSides) => Math.floor(Math.random() * nrSides) + 1;

while (true) {
  let nr = diceRoll(nrSides);
  if (nr === nrSides) {
    target.innerHTML += `<li>${nr}</li>`;
    break;
  } else {
    target.innerHTML += `<li>${nr}</li>`;

  }
}
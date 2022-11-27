'use strict';

const nrDogs = 6;
const dogNames = [];
const target = document.getElementById('target');


for (let i = 0; i < nrDogs; i++) {
  let name = prompt('Dog name: ');
  dogNames.push(name);
}

dogNames.sort().reverse()

for (let i = 0; i < dogNames.length; i++) {
  target.innerHTML += `<li>${dogNames[0+i]}</li>`;
}
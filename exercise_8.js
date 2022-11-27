'use strict';

const target = document.getElementById('target');
const words = ['I', 'Am', 'Tired', 'And', 'I', 'Need', 'A', 'Holiday', 'ASAP'];
let sentence = ' ';
const concat = (words) => {
  for (let w of words) {
    sentence += w
  }
  target.innerHTML = sentence
};

concat(words)
'use strict';
const nr = Number(prompt('Write a number: '));
const nrList = [];

while (true) {
  const nr = Number(prompt('Write a number: '));
  if (nrList.includes(nr)) {
    alert(`You have already entered number ${nr}!`);
    break;
  } else {
    nrList.push(nr);
  }
}

console.log(nrList.sort(function(a, b){return a-b}))
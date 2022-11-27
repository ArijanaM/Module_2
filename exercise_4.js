'use strict';

let nr_list = []
let nr = Number(prompt('Write a number: '))
while (nr !== 0) {
  nr = Number(prompt('Write a number: '))
  nr_list.push(nr)
}

console.log(nr_list.sort().reverse())
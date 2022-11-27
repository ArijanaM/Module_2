'use strict';


const nrs = [2, 7, 4, 9, 12, 15, 13]
const even = (array) => {
  let evenNrs = [];
  for (let a of array) {
    if (a % 2 === 0) {
      evenNrs.push(a);
    }
  }
  return evenNrs
}

let newArray = even(nrs)
console.log(`Original array: ${nrs}`)
console.log(`New array: ${newArray}`)
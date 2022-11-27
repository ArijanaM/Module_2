'use strict';

let nrs = [];

for (let n = 0; n < 5; n++) {
    let inputNr = Number(prompt(`Number ${n + 1}:`));
    nrs.push(inputNr);
}

for (let n = nrs.length; n > 0; n--) {
    console.log(nrs[n - 1]);
}
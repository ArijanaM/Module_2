'use strict';

const nr_participants = Number(prompt('Number of participants: '));

let names_participants_list = [];
const target = document.getElementById('target');

for (let i = 0; i < nr_participants; i++) {
    let names = prompt(`Name of the participant ${i + 1}: `);
    names_participants_list.push(names);
}

names_participants_list.sort();

for (let i = 0; i < names_participants_list.length; i++) {
    target.innerHTML += `<li>${names_participants_list[i]}</li>`;
}
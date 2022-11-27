'use strict';

const nrCandidates = Number(prompt('Nr of candidates: '));
const candidates = [];
for (let i = 0; i < nrCandidates; i++) {
  let candid = {
    name: undefined,
    votes: 0,
  };
  const nameCan = prompt(`Names of candidates: ${i + 1}`).toLowerCase();
  candid.name = nameCan.toLowerCase();
  candidates.push(candid);
}

const nrVoters = Number(prompt('Nr of voters: '));
for (let j = 0; j < nrVoters; j++) {
  const vote = prompt(`Voter ${j + 1} - Who do you vote for: `).toLowerCase();
  candidates.forEach(candid => {
    if (candid.name === vote) {
      candid.votes += 1;
    }
  });
}
candidates.sort((a, b) => b.votes - a.votes);

console.log(
    `The winner is ${candidates[0]['name']} with ${candidates[0]['votes']} votes.`);
console.log('Results: ');
candidates.forEach(candid => {
  console.log(`${candid['name']} : ${candid['votes']} votes`);
});

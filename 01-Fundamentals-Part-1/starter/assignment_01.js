`use strict`;

const country = `Republic of Korea`;
const continent = `Asia`;
const isIsland = false;
let population = 151;
const language = `ENGLISH`;
const finlandPopulation = 6;
const avgPopulation = 33;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

console.log(population / 2);

console.log(population + 1);

const isMoreThanFinland = population > finlandPopulation;
console.log(isMoreThanFinland);

const isLessThanAvg = population < avgPopulation;
console.log(isLessThanAvg);

const description = `${country} is in ${continent}, and its ${population} million speaks ${language}.`;
console.log(description);

if (population > avgPopulation) {
  console.log(`${country}'s is above average`);
} else if (population < avgPopulation) {
  console.log(`${country}'s population is ${(avgPopulation - population).toFixed(1)} million below average`);
}

console.log('9' - '5', typeof ('9' - '5'));
console.log('19' - '13' + '17', typeof ('19' - '13' + '17'));
console.log('19' - '13' + 17, typeof ('19' - '13' + 17));
console.log('123' < 57, typeof ('123' < 57));
console.log(5 + 6 + '4' + 9 - 4 - 2, typeof (5 + 6 + '4' + 9 - 4 - 2));

// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
// const oneNeighbours = 1;
// if (numNeighbours === oneNeighbours) {
//   console.log(`Only ${oneNeighbours} border!`);
// } else if (numNeighbours > oneNeighbours) {
//   console.log(`More than ${oneNeighbours} border`);
// } else {
//   console.log(`No borders`);
// }

const sarahCriteria = {
  language: 'English',
  isLessthan50: population < 50 ? true : false,
  isIsland: false,
};

if (sarahCriteria.language.toLowerCase() === language.toLowerCase() && sarahCriteria.isLessthan50 === true && sarahCriteria.isIsland !== true) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria`);
}

switch (language.toLowerCase()) {
  case `chinese`:
  case `mandarian`:
    console.log(`MOST number of native speakers!`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `english`:
    console.log(`3rd place`);
    break;
  case `hindi`:
    console.log(`Number 4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
    break;
}

console.log(`${country}'s population is ${population > avgPopulation ? `above` : `below`} average`);

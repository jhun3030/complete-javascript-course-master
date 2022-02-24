`use strict`;

const myCountry = {
  country: `Republic of Korea`,
  capital: `Seoul`,
  language: `Korean`,
  population: 51.7,
  neighbours: [`Russia`, `North Korea`],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital city called ${this.capital} neighbours`
    );
  },
  checkisIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
  voters: 50,
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital city called ${myCountry.capital} neighbours`
);

myCountry.population += 1;
console.log(myCountry.population);

myCountry[`population`] -= 1;
console.log(myCountry.population);

myCountry.describe();

myCountry.checkisIsland();
console.log(myCountry.isIsland);

for (let count = 1; count <= myCountry.voters; count++) {
  console.log(`Voter number ${count} is currently voting`);
}

const listOfNeighbours = [[`Canada`, `Mexico`], [`Spain`], [`Norway`, `Sweden`, `Russia`]];

for (let outer = 0; outer < listOfNeighbours.length; outer++) {
  for (let inner = 0; inner < listOfNeighbours[outer].length; inner++) {
    console.log(`Neighbours : ${listOfNeighbours[outer][inner]}`);
  }
}

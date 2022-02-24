'use strict';

/*
// Activating strict mode ===========================================

'use strict'; // Activate strict mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}

if (hasDriversLicense) {
  console.log(`I can Drive! :D`);
}

// const interface = 'Audio';
// const private = 534;
// ==================================================================
*/
/*
// Functions ========================================================

function logger() {
  console.log(`My name is Jonas`);
}

// invoking, running, calling the function
logger();
logger();
logger();

function fruitProcessor(apples, oragnes) {
  console.log(apples, oragnes);
  const juice = `Juice with ${apples} apples and ${oragnes} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// ==================================================================
*/
/*
// Function Declarations and Expressions ============================

// Function Declarations
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function Expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
// ==================================================================
*/
/*
// Arrow Functions ==================================================
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1990, `Bob`));
// ==================================================================
*/
/*
// Functions Calling Other Functions ================================

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oragnes) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oragnes);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}  

console.log(fruitProcessor(2, 3));
// ==================================================================
*/
/*
// Reviewing Functions ==============================================

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
// ==================================================================
*/
/*
// CODING CHALLENGE #1 ==============================================

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins Win (${avgDolphins} VS. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas Win (${avgKoalas} VS. ${avgDolphins})`);
  } else {
    console.log(`No team wins!`);
  }
};

const dolphinScore1 = 85;
const dolphinScore2 = 54;
const dolphinScore3 = 41;
const dolphinAvg = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;
const koalasAvg = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(dolphinAvg, koalasAvg);
// ==================================================================
*/
/*
// Introduction to Arrays ===========================================

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob', 'Alice']; // illegal

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
// ==================================================================
*/
/*
// Basic Array Operations(Methods) ==================================

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last elements
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First elements
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log(`You have a friend called Steven`);
}
// ==================================================================
*/
/*
// CODING CHALLENGE #2 ==============================================

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

// console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(total);
// ==================================================================
*/
/*
// Introduction to Objects ==========================================

const jonasArray = ['Jonas', 'Schemedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
// ==================================================================
*/
/*
// Dot VS Bracket Noation ===========================================

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends`);

console.log(interedIn);

if (jonas[interedIn]) {
  console.log(jonas[interedIn]);
} else {
  console.log(`Wrong request`);
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschedtman';
console.log(jonas);

// Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
// ==================================================================
*/
/*
// Object Methods ===================================================

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    return this.summary;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge']());

jonas.getSummary();
console.log(jonas.summary);
// ==================================================================
*/
/*
// CODING CHALLENGE #3 ==============================================

const markInfo = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnInfo = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markInfo.calcBMI();
johnInfo.calcBMI();

if (markInfo.bmi > johnInfo.bmi) {
  console.log(`${markInfo.fullName}'s BMI (${markInfo.bmi.toFixed(1)}) is higher than ${johnInfo.fullName}'s (${johnInfo.bmi.toFixed(1)})`);
} else if (johnInfo.bmi < markInfo.bmi) {
  console.log(`${johnInfo.fullName}'s BMI (${johnInfo.bmi.toFixed(1)}) is higher than ${markInfo.fullName}'s (${markInfo.bmi.toFixed(1)})`);
}
// ==================================================================
*/
/*
// Iteration : The for Loop =========================================

// for-loop keeps running while condition is TRUE 
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights reptition ${rep}`);
}
// ==================================================================
*/
/*
// Looping Arrays, Breaking and Continuing ==========================

const jonasArray = ['Jonas', 'Schemedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];
let jonasArrayTypes = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonas array
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  // jonasArrayTypes[i] = typeof jonasArray[i];
  jonasArrayTypes.push(typeof jonasArray[i]);
}

console.log(jonasArrayTypes);

const birthYears = [1991, 2007, 1969, 2020];
const currentyears = 2037;
const ages = [];
for (let i = 0; i < birthYears.length; i++) {
  ages.push(currentyears - birthYears[i]);
}
console.log(ages);

// continue and break
console.log(`-----ONLY STRINGS-----`);
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== `string`) {
    continue;
  }
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`-----BREAK WITH NUMBER-----`);
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === `number`) {
    break;
  }
  console.log(jonasArray[i], typeof jonasArray[i]);
}
// ==================================================================
*/
/*
// Looping Backwards and Loops in Loops =============================

const jonasArray = ['Jonas', 'Schemedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Starting Exercise ${exercise}-----`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} : Lifting weight Repetition ${rep} 🏋️‍♀️`);
  }
}
// ==================================================================
*/
/*
// The while loop ===================================================

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight Repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE : Lifting weight Repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
let count = 0;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  count++;
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    count++;
    console.log(`Loop is about to end... ${count}`);
  }
}
// ==================================================================
*/
/*
// CODING CHALLENGE #4 ==============================================

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const testBillValues = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let idx = 0; idx <= testBillValues.length - 1; idx++) {
  tips.push(calcTip(testBillValues[idx]));
  totals.push(tips[idx] + testBillValues[idx]);
}

console.log(tips);
console.log(totals);

console.log(calcAverage(totals));
// ==================================================================
*/

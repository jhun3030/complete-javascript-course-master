`use strict`;

const getRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = getRandomNumber();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};

const isWinInteraction = function () {
  document.querySelector(`.number`).style.transition = `500ms`;
  document.querySelector(`.number`).style.width = `30rem`;
  document.querySelector(`body`).style.transition = `500ms`;
  document.querySelector(`body`).style.backgroundColor = `#60b347`;
};

const isInProgessInteraction = function () {
  document.querySelector(`body`).style.transition = `500ms`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.transition = `500ms`;
  document.querySelector(`.number`).style.width = `15rem`;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is no input
  if (!guess) {
    displayMessage(`No Number! 🚫`);

    // When Player Wins
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
      isWin();
    }
    displayNumber(secretNumber);
    displayMessage(`🎉 Correct Number!`);

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too HIGH 📈` : `Too LOW 📉`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💥 You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  secretNumber = getRandomNumber();
  score = 20;
  displayNumber(`?`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  displayMessage(`Start Guessing...`);
  isInProgess();
});

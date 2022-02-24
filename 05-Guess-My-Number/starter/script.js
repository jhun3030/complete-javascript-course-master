`use strict`;

// Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number! 🚫`;

    // When Player Wins
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.number`).style.transition = `500ms`;
    document.querySelector(`.number`).style.width = `30rem`;

    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

    document.querySelector(`body`).style.transition = `500ms`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    // When guess is too HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too High! 📈`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game! 💥`;
      document.querySelector(`.score`).textContent = 0;
    }

    // When guess is too LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low! 📉`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game! 💥`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector(`.message`).textContent = `Start guessing...`;

  document.querySelector(`.score`).textContent = score;

  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;

  document.querySelector(`.number`).style.transition = `500ms`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.transition = `500ms`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
});

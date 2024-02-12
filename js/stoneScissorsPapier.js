const stone = document.querySelector(`.stoneBtn`);
const scissors = document.querySelector(`.scrissorsBtn`);
const papier = document.querySelector(`.papierBtn`);

const computerResultBtn = document.querySelector(
  `.stoneScissorsPapierShowResult`
);
let pScore = document.querySelector(`.stoneScissorsPapierPlayerScore`);
let cScore = document.querySelector(`.stoneScissorsPapierComputerScore`);

let result = document.querySelector(`.stoneScissorsPapierResult`);

let userScore = 1;
let computerScore = 1;

stone.addEventListener(`click`, function () {
  const num = Math.floor(Math.random() * 3) + 1;
  console.log(num);

  stone.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  scissors.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  papier.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;

  computerResultBtn.addEventListener(`click`, function () {
    if (num === 1) {
      stone.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    } else if (num === 2) {
      scissors.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    } else {
      papier.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    }
  });

  if (num === 1) {
    cScore.textContent = `Комп’ютер - ${computerScore++}`;
    pScore.textContent = `Ви - ${userScore++}`;

    result.style.color = `green`;
    result.textContent = `Нічия! Спробуй ще раз!`;
  } else if (num === 2) {
    pScore.textContent = `Ви - ${userScore++}`;

    result.style.color = `green`;
    result.textContent = `Вітаю! Ви виграли раунд!`;
  } else if (num === 3) {
    cScore.textContent = `Комп’ютер - ${computerScore++}`;

    result.style.color = `red`;
    result.textContent = `Комп’ютер виграв раунд!`;
  }
});

scissors.addEventListener(`click`, function () {
  stone.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  scissors.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  papier.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  const num = Math.floor(Math.random() * 3) + 1;

  stone.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  scissors.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  papier.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;

  computerResultBtn.addEventListener(`click`, function () {
    stone.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
    scissors.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
    papier.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
    if (num === 1) {
      stone.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    } else if (num === 2) {
      scissors.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    } else {
      papier.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    }
  });
  if (num === 1) {
    pScore.textContent = `Ви - ${userScore++}`;

    result.style.color = `green`;
    result.textContent = `Вітаю! Ви виграли раунд!`;
  } else if (num === 2) {
    pScore.textContent = `Ви - ${userScore++}`;
    cScore.textContent = `Комп’ютер - ${computerScore++}`;

    result.style.color = `green`;
    result.textContent = `Нічия! Спробуй ще раз!`;
  } else if (num === 3) {
    cScore.textContent = `Комп’ютер - ${computerScore++}`;

    result.style.color = `red`;
    result.textContent = `Комп’ютер виграв раунд!`;
  }
});

papier.addEventListener(`click`, function () {
  const num = Math.floor(Math.random() * 3) + 1;

  stone.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  scissors.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
  papier.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;

  computerResultBtn.addEventListener(`click`, function () {
    stone.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
    scissors.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
    papier.style.boxShadow = `3px 3px 0px 0px rgba(0,0,0,0.20)`;
    if (num === 1) {
      stone.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    } else if (num === 2) {
      scissors.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    } else {
      papier.style.boxShadow = `0px 0px 26px 19px rgba(70,199,50,0.76)`;
    }
  });

  if (num === 1) {
    pScore.textContent = `Ви - ${userScore++}`;

    result.style.color = `green`;
    result.textContent = `Вітаю! Ви виграли раунд!`;
  } else if (num === 2) {
    cScore.textContent = `Комп’ютер - ${computerScore++}`;

    result.style.color = `red`;
    result.textContent = `Комп’ютер виграв раунд!`;
  } else if (num === 3) {
    pScore.textContent = `Ви - ${userScore++}`;
    cScore.textContent = `Комп’ютер - ${computerScore++}`;

    result.style.color = `green`;
    result.textContent = `Нічия! Спробуй ще раз!`;
  }
});

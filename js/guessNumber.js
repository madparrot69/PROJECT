const num = document.querySelector(`.guessNumberSearchInput`);
const btn = document.querySelector(`.guessNumberSearchBtn`);
let result = document.querySelector(`.guessNumberResult`);

btn.addEventListener(`click`, function () {
  const num2 = Math.floor(Math.random() * 10) + 1;

  const val1 = +num.value;

  if (val1 === num2) {
    result.style.color = `green`;
    result.textContent = `Вітаю, ви вгадали число! (${num2})`;
  } else {
    result.style.color = `red`;
    result.textContent = `Ви програли, комп’ютер загадав ${num2}`;
  }
});

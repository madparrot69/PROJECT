const btn = document.querySelector(".timeCalculatorButtonSearch");

const a = document.querySelector(".timeCalculatorNumber");

btn.addEventListener(`click`, function () {
  const val = a.value;

  let result = document.querySelector(".timeCalculatorResult");

  let days = Math.floor(val / (3600 * 24));
  let hours = Math.floor((val % (3600 * 24)) / 3600);
  let minutes = Math.floor((val % 3600) / 60);
  let seconds = Math.floor(val % 60);

  result.textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
});

const num = document.querySelector(`.checkTheYearYouBornAtSearchInput`);
const btn = document.querySelector(`.checkTheYearYouBornAtSearchBtn`);
let result = document.querySelector(`.checkTheYearYouBornAtResult`);

btn.addEventListener(`click`, function () {
  const val = num.value;

  if (val > 0) {
    if (val % 4 === 0) {
      result.style.color = `green`;
      result.textContent = `Ви народилися у високосний рік!`;
    } else {
      result.style.color = `red`;
      result.textContent = `Ви народилися не у високосний рік!`;
    }
  } else {
    result.style.color = `red`;
    result.textContent = `Введіть рік народження!`;
  }
});

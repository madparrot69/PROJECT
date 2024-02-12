const logo = document.querySelector(`.logo`);

const checkTheYearYouBornAt = document.querySelector(`.checkTheYearYouBornAt`);
let hr1 = document.querySelector(`.hr1`);
let main = document.querySelector(`main`);
let section = document.querySelector(`section`);
const guessNumber = document.querySelector(`.guessNumber`);
let hr2 = document.querySelector(`.hr2`);
const stoneScissorsPapier = document.querySelector(`.stoneScissorsPapier`);
let hr3 = document.querySelector(`.hr3`);
const calculator = document.querySelector(`.calculator`);
let hr4 = document.querySelector(`.hr4`);
const timeCalculator = document.querySelector(`.timeCalculator`);
let hr5 = document.querySelector(`.hr5`);
const dinoTask = document.querySelector(`.dinoTask`);
let hr6 = document.querySelector(`.hr6`);
const football = document.querySelector(`.football`);
let hr7 = document.querySelector(`.hr7`);
const paste3Numbers = document.querySelector(`.paste3Numbers`);
let hr8 = document.querySelector(`.hr8`);
let portfolio = document.querySelector(`.portfolio`);
let hr9 = document.querySelector(`.hr9`);
const chooseTheScientist = document.querySelector(`.chooseTheScientist`);

const interactive = document.querySelector(`.interactive`);
const ourTeam = document.querySelector(`.ourTeamLi`);
const contacts = document.querySelector(`.Contacts`);
const sortGames = document.querySelector(`.sortGames`);
let navBtn1 = document.getElementById(`navBtn1`);
let navBtn2 = document.getElementById(`navBtn2`);
let navBtn3 = document.getElementById(`navBtn3`);
const title = document.querySelector(`.titleName`);
sortGames.classList.add("opacity");

interactive.addEventListener("mouseenter", function () {
  sortGames.classList.remove("opacity");
  sortGames.classList.add("sortGamesOpen");
});

let timeoutId;
[interactive, sortGames].forEach((element) => {
  element.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(function () {
      sortGames.classList.remove("sortGamesOpen");
      sortGames.classList.add("opacity");
    }, 500);
  });
  element.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
  });
});

contacts.addEventListener(`click`, function () {
  var footer = document.querySelector(`footer`);
  footer.scrollIntoView({ behavior: "smooth" });
});
ourTeam.addEventListener(`click`, function () {
  paste3Numbers.scrollIntoView({ behavior: "smooth" });
});
logo.addEventListener(`click`, function () {
  title.textContent = `Популярні інетрактивні ігри`;

  stoneScissorsPapier.classList.remove("opacity");
  hr3.classList.remove("opacity");
  dinoTask.classList.remove("opacity");
  hr6.classList.remove("opacity");
  football.classList.remove("opacity");
  hr7.classList.remove("opacity");
  checkTheYearYouBornAt.classList.remove("opacity");
  hr1.classList.remove("opacity");
  guessNumber.classList.remove("opacity");
  hr2.classList.remove("opacity");
  calculator.classList.remove("opacity");
  hr4.classList.remove("opacity");
  timeCalculator.classList.remove("opacity");
  hr5.classList.remove("opacity");
  paste3Numbers.classList.remove("opacity");
  hr8.classList.remove("opacity");
  portfolio.classList.remove("opacity");
  hr9.classList.remove("opacity");
  chooseTheScientist.classList.remove("opacity");
});

navBtn1.addEventListener(`click`, function () {
  title.textContent = `Числові ігри`;

  stoneScissorsPapier.classList.add("opacity");
  hr3.classList.add("opacity");
  dinoTask.classList.add("opacity");
  hr6.classList.add("opacity");
  football.classList.add("opacity");
  hr7.classList.add("opacity");
  portfolio.classList.add("opacity");
  hr9.classList.add("opacity");
  chooseTheScientist.classList.add("opacity");
  //active
  checkTheYearYouBornAt.classList.remove("opacity");
  hr1.classList.remove("opacity");
  guessNumber.classList.remove("opacity");
  hr2.classList.remove("opacity");
  calculator.classList.remove("opacity");
  hr4.classList.remove("opacity");
  timeCalculator.classList.remove("opacity");
  hr5.classList.remove("opacity");
  paste3Numbers.classList.remove("opacity");
  hr8.classList.remove("opacity");

  main.style.height = `auto`;
  section.style.height = `auto`;
});

navBtn2.addEventListener(`click`, function () {
  title.textContent = `Розважальні ігри`;

  checkTheYearYouBornAt.classList.add("opacity");
  hr1.classList.add("opacity");
  guessNumber.classList.add("opacity");
  hr2.classList.add("opacity");
  calculator.classList.add("opacity");
  hr4.classList.add("opacity");
  timeCalculator.classList.add("opacity");
  hr5.classList.add("opacity");
  paste3Numbers.classList.add("opacity");
  hr8.classList.add("opacity");
  portfolio.classList.add("opacity");
  hr9.classList.add("opacity");
  chooseTheScientist.classList.add("opacity");
  //active
  stoneScissorsPapier.classList.remove("opacity");
  hr3.classList.remove("opacity");
  dinoTask.classList.remove("opacity");
  hr6.classList.remove("opacity");
  football.classList.remove("opacity");
  hr7.classList.remove("opacity");

  main.style.height = `auto`;
  section.style.height = `auto`;
});

navBtn3.addEventListener(`click`, function () {
  title.textContent = `Ознайомчі ігри`;

  stoneScissorsPapier.classList.add("opacity");
  hr3.classList.add("opacity");
  dinoTask.classList.add("opacity");
  hr6.classList.add("opacity");
  football.classList.add("opacity");
  hr7.classList.add("opacity");
  checkTheYearYouBornAt.classList.add("opacity");
  hr1.classList.add("opacity");
  guessNumber.classList.add("opacity");
  hr2.classList.add("opacity");
  calculator.classList.add("opacity");
  hr4.classList.add("opacity");
  timeCalculator.classList.add("opacity");
  hr5.classList.add("opacity");
  paste3Numbers.classList.add("opacity");
  hr8.classList.add("opacity");
  //active
  portfolio.classList.remove("opacity");
  hr9.classList.remove("opacity");
  chooseTheScientist.classList.remove("opacity");

  main.style.height = `auto`;
  section.style.height = `auto`;
});

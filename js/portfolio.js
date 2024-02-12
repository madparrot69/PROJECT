const btnL = document.querySelector(`.portfoliobtn1`);
const btnR = document.querySelector(`.portfoliobtn2`);

const me = document.querySelector(`.khrystyna`);
const spotify = document.querySelector(`.spotify`);

const portfolioTeammates = document.querySelector(`.portfolioTeammates`);
const portfolioWorkReport = document.querySelector(`.portfolioWorkReport`);

const s1 = document.getElementById(`stick1`);
const s2 = document.getElementById(`stick2`);

me.style.opacity = `1`;
spotify.style.opacity = `0`;

btnL.addEventListener("click", function () {
  if (me.style.opacity === "1") {
    me.style.opacity = "0";
    spotify.style.opacity = "1";
    portfolioTeammates.textContent = `Spotifay`;
    portfolioWorkReport.textContent = `Рекомендував чудову музику.`;

    s1.style.width = `18px`;
    s1.style.backgroundColor = `#d7d7d7`;
    s2.style.width = `30px`;
    s2.style.backgroundColor = `#797979`;

    stick1.classList.add(`.`);
  } else {
    me.style.opacity = "1";
    spotify.style.opacity = "0";
    portfolioTeammates.textContent = `Христина Степенко`;
    portfolioWorkReport.textContent = `Написала html, css i js для верстки цього сайту.`;

    s1.style.width = `30px`;
    s1.style.backgroundColor = `#797979`;
    s2.style.width = `18px`;
    s2.style.backgroundColor = `#d7d7d7`;
  }
  console.log(`hi`);
});

btnR.addEventListener("click", function () {
  if (me.style.opacity === "1") {
    me.style.opacity = "0";
    spotify.style.opacity = "1";
    portfolioTeammates.textContent = `Spotifay`;
    portfolioWorkReport.textContent = `Рекомендував чудову музику.`;

    s1.style.width = `18px`;
    s1.style.backgroundColor = `#d7d7d7`;
    s2.style.width = `30px`;
    s2.style.backgroundColor = `#797979`;
  } else {
    me.style.opacity = "1";
    spotify.style.opacity = "0";
    portfolioTeammates.textContent = `Христина Степенко`;
    portfolioWorkReport.textContent = `Написала html, css i js для верстки цього сайту.`;

    s1.style.width = `30px`;
    s1.style.backgroundColor = `#797979`;
    s2.style.width = `18px`;
    s2.style.backgroundColor = `#d7d7d7`;
  }
});
console.log(`hi`);

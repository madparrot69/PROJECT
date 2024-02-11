const dinoGame = document.querySelector(`.dinoTaskFunctions`);
const startGame = document.querySelector(`.dinoFirstTakeDiv`);
let score = document.querySelector(`.dinoScore`);
let HI = document.querySelector(`.dinoHighScore`);
const GAMEOVER = document.querySelector(`.gameOverDiv`);
const restartBtn = document.querySelector(`.gameOverRestartBtn`);

const dino = document.querySelector(`.dino`);

const dinoRun1 = document.getElementById(`dinoRunImg1`);
const dinoRun2 = document.getElementById(`dinoRunImg2`);
const dinoStay = document.getElementById(`dinoStayStill`);
const dinoStayEyeClosed = document.getElementById(`dinoStayStillEyeClosed`);

const cactus = document.querySelector(`.cactus`);

const cactus1 = document.getElementById(`cactusImg1`);
const cactus2 = document.getElementById(`cactusImg2`);
const cactus3 = document.getElementById(`cactusImg3`);

const runningTrack = document.querySelector(`.dinoGroundTrack`);

startGame.classList.remove(`opacity`);
GAMEOVER.classList.add(`opacity`);

cactus.classList.add(`opacity`);
// cactus.classList.remove(`cactusMove`);

HI.style.opacity = `0`;
score.style.opacity = `0`;
scoreGame = 0;

dino.style.opacity = `0`;

// cactus1.style.opacity = `0`;
// cactus2.style.opacity = `0`;
// cactus3.style.opacity = `0`;

//cactus random

runningTrack.style.opacity = `0`;

startGame.addEventListener(`click`, function () {
  startGame.classList.add(`opacity`);
  setTimeout(function () {
    const num = Math.floor(Math.random() * 3) + 1;
    console.log(num);

    if (num === `1`) {
      cactus1.style.opacity = `1`;
      cactus2.style.opacity = `0`;
      cactus3.style.opacity = `0`;
    } else if (num === `2`) {
      cactus1.style.opacity = `0`;
      cactus2.style.opacity = `1`;
      cactus3.style.opacity = `0`;
    } else if (num === `3`) {
      cactus1.style.opacity = `0`;
      cactus2.style.opacity = `0`;
      cactus3.style.opacity = `1`;
    }
    // cactus.classList.add(`cactusMove`);
  }, 3000);

  score.style.opacity = `1`;
  setInterval(function () {
    scoreGame += 1;
    score.textContent = scoreGame;
  }, 100);

  dinoRun1.style.opacity = `1`;
  runningTrack.style.opacity = `1`;
  dino.style.opacity = `1`;
  clearInterval(intervalId);
  dinoStay.style.opacity = `0`;
  dinoStayEyeClosed.style.opacity = `0`;

  // changeDinoRunImage();
});
function changeDinoImage() {
  if (dinoStay.style.opacity === "1") {
    dinoStay.style.opacity = "0";
    dinoStayEyeClosed.style.opacity = "1";
  } else {
    dinoStay.style.opacity = "1";
    dinoStayEyeClosed.style.opacity = "0";
  }
}

intervalId = setInterval(changeDinoImage, 300);

dinoGame.addEventListener(`click`, function () {
  // score.style.opacity = `1`;
  // setInterval(function () {
  //   scoreGame += 1;
  //   score.textContent = scoreGame;
  // }, 100);
  // dinoRun1.style.opacity = `1`;
  // runningTrack.style.opacity = `1`;
  // dino.style.opacity = `1`;
  // clearInterval(intervalId);
  // dinoStay.style.opacity = `0`;
  // dinoStayEyeClosed.style.opacity = `0`;
});

// function changeDinoRunImage() {
//   if (dinoRun1.style.opacity === "1") {
//     dinoRun1.style.opacity = "0";
//     dinoRun2.style.opacity = "1";
//   } else {
//     dinoRun1.style.opacity = "1";
//     dinoRun2.style.opacity = "0";
//   }
// }

// intervalId2 = setInterval(changeDinoRunImage, 300);

dinoGame.addEventListener(`click`, function (event) {
  jump();
  console.log(`hi`);
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 1000);
}

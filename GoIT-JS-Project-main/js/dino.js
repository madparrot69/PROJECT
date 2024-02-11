const dinoGame = document.querySelector(`.dinoTaskFunctions`);

let score = document.querySelector(`.dinoScore`);
let HI = document.querySelector(`.dinoHighScore`);
const GAMEOVER = document.querySelector(`.gameOverDiv`);
const restartBtn = document.querySelector(`.gameOverRestartBtn`);
const dino = document.querySelector(`.dino`);

const dinoRun1 = document.getElementById(`dinoRunImg1`);
const dinoRun2 = document.getElementById(`dinoRunImg2`);
const dinoStay = document.getElementById(`dinoStayStill`);
const dinoStayEyeClosed = document.getElementById(`dinoStayStillEyeClosed`);

const cacti = document.querySelector(`.cacti`);

const cactus1 = document.getElementById(`dinoGroundCactus1`);
const cactus2 = document.getElementById(`dinoGroundCactus2`);
const cactus3 = document.getElementById(`dinoGroundCactus3`);

const runningTrack = document.querySelector(`.dinoGroundTrack`);

GAMEOVER.classList.add(`opacity`);

HI.style.opacity = `0`;
score.style.opacity = `0`;

dino.style.opacity = `0`;

cacti.style.opacity = `0`;

runningTrack.style.opacity = `0`;

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
  score.style.opacity = `1`;
  dinoRun1.style.opacity = `1`;
  runningTrack.style.opacity = `1`;
  //   dino.style.opacity = `1`;
  clearInterval(intervalId);
  dinoStay.style.opacity = `0`;
  dinoStayEyeClosed.style.opacity = `0`;

  //   changeDinoRunImage();
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
  }, 2000);
}

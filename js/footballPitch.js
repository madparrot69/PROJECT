const field = document.querySelector(`.footballPitch`);
const ball = document.querySelector(`.ball`);

field.addEventListener(`click`, (event) => {
  const fieldRect = field.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();
  const mouseX = event.clientX - fieldRect.left;
  const mouseY = event.clientY - fieldRect.top;

  let newX = mouseX - ballRect.width / 2;
  let newY = mouseY - ballRect.height / 2;

  if (newX < 0) {
    newX = 0;
  }
  if (newX + ballRect.width > fieldRect.width) {
    newX = fieldRect.width - ballRect.width;
  }
  if (newY < 0) {
    newY = 0;
  }
  if (newY + ballRect.height > fieldRect.height) {
    newY = fieldRect.height - ballRect.height;
  }

  ball.style.left = newX + "px";
  ball.style.top = newY + "px";
});

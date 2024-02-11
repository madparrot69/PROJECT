let userNameSpan = document.querySelector(`.userSpan`);
const logo = document.querySelector(`.logo`);
const closeBtn = document.querySelector(`.closeModalWindow`);
const closeBtn2 = document.querySelector(`.closeModalThankYouWindow`);
const modalBox1 = document.querySelector(`.modalBox1`);
let input = document.querySelector(`.modalWindowInput`);

const modalBox2 = document.querySelector(`.modalBox2`);

const saveBtn = document.querySelector(`.modalWindowSaveName`);

modalBox1.classList.remove(`opacity`);
modalBox2.classList.add(`opacity`);

logo.addEventListener(`click`, function () {
  modalBox1.classList.remove(`opacity`);
});

saveBtn.addEventListener(`click`, function () {
  modalBox1.classList.add(`opacity`);
  modalBox2.classList.remove(`opacity`);
  console.log(`hi`);
  const val = input.value;
  if (val !== "") {
    userNameSpan.textContent = val;
  } else {
    userNameSpan.textContent = `guest`;
  }
});

closeBtn.addEventListener(`click`, function () {
  modalBox1.classList.add(`opacity`);
  console.log(`hi`);
});

closeBtn2.addEventListener(`click`, function () {
  modalBox2.classList.add(`opacity`);
  console.log(`hi`);
});

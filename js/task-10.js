function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls > input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const array = [];
  for (let i = 0; i < amount; i + 1) {
    // const element = array[i];
  }
};

const destroyBoxes = () => {
  divBoxes.innerHTML = "";
  inputEl.innerHTML = "";
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

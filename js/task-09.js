function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");

const onButtonChangeColor = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
};

buttonChange.addEventListener("click", onButtonChangeColor);

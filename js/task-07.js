const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

spanEl.style.fontSize = `${inputEl.value}px`;

const onSizeTextHandle = (event) => {
  spanEl.style.fontSize = event.currentTarget.value + "px";
};

inputEl.addEventListener("input", onSizeTextHandle);

const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");

const onSizeTextHandle = (event) => {
  spanEl.style.fontSize = event.currentTarget.value + "px";
};

inputEl.addEventListener("input", onSizeTextHandle);

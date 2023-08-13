// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст
// щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним

const inputEl = document.querySelector("#validation-input");

const onNotFocusInputHandle = (event) => {
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    if (!inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("valid");
      inputEl.classList.toggle("invalid");
    }
  } else if (inputEl.value.length === Number(inputEl.dataset.length)) {
    if (!inputEl.classList.contains("valid")) {
      inputEl.classList.remove("invalid");
      inputEl.classList.toggle("valid");
    }
  }
};

inputEl.addEventListener("blur", onNotFocusInputHandle);

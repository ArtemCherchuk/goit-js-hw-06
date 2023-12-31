let counterValue = 0;
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector("#value");

// decrementEl.addEventListener("click", () => {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// });

// incrementEl.addEventListener("click", () => {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// });

const onDecrementClickBtnHandle = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementClicBtnkHandle = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementEl.addEventListener("click", onDecrementClickBtnHandle);
incrementEl.addEventListener("click", onIncrementClicBtnkHandle);

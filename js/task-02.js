const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ingredients.forEach((element) => {
//   const list = document.querySelector("#ingredients");
//   const elements = document.createElement("li");
//   elements.textContent = element;
//   elements.classList.add("item");
//   list.append(elements);
// });

ingredients.forEach((element) => {
  const ingredientsList = document.querySelector("#ingredients");
  const ingredient = `<li class = "item">
  ${element}
  </li>`;
  ingredientsList.insertAdjacentHTML("afterbegin", ingredient);
});

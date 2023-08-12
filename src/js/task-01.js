const getCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${getCategories.length}`);

getCategories.forEach((item) => {
  const categoryTitles = item.querySelector("h2");
  const categoryElements = item.querySelectorAll("li");

  console.log(`Category: ${categoryTitles.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});

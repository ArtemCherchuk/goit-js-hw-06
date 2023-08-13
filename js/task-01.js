const getCategories = document.querySelectorAll(".item");
console.log("Number of categories:", getCategories.length);

getCategories.forEach((item) => {
  const categoryTitles = item.firstElementChild;
  const categoryElements = item.lastElementChild.children;

  console.log(`Category: ${categoryTitles.textContent}`);
  console.log("Elements:", categoryElements.length);
});

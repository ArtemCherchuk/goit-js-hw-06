const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

function newList(arr) {
  const ulEl = document.querySelector(".gallery");

  ulEl.style.display = "flex";
  ulEl.style.gap = "24px";
  ulEl.style.listStyle = "none";

  const imgEl = arr
    .map(
      ({ url, alt }) =>
        `<li>
      <img src="${url}" alt="${alt}" width="300" class="item-img"/>
    </li>`
    )
    .join("");

  ulEl.insertAdjacentHTML("afterbegin", imgEl);
}

newList(images);

"use strict";

//1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
//2. Lav en funktion der viser listen af alle `product`-objekter på websiden.
//3. Lav en funktion der kan sortere listen efter `name`, `price` og `inStock`. Sorteringen skal ske på baggrund af valgte `option` i `select` (se `environment-03`). Sortering ændrer sig hver gang en ny sortering `option` vælges.

window.addEventListener("load", start);

const products = [
  {
    name: "makrel",
    price: 18,
    inStock: false,
  },
  {
    name: "tunsalat",
    price: 40,
    inStock: true,
  },
  {
    name: "ost",
    price: 20,
    inStock: false,
  },
];

function start() {
  showProduct();

  document
    .querySelector("#select-sort-by")
    .addEventListener("change", sortProducts);
}

function showProduct() {
  for (const product of products) {
    const html = /*html */ `
        
        <li>${product.name} - ${product.inStock}</li>
        
        `;

    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}

//virker ikke !!!!!!!!!!!!!!!!!!!!!!!!!

function sortProducts() {
  const selectElement = document.getElementById("select-sort-by");
  const selectValue = selectElement.value;

  let sortedProducts;

  if (selectValue === "name") {
    sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectValue === "price") {
    sortedProducts = products.sort((a, b) => a.price - b.price);
  } else if (selectValue === "inStock") {
    sortedProducts = products.sort((a, b) => b.inStock - a.inStock);
  }

  document.querySelector("#list-container").innerHTML = "";

  for (const product of sortedProducts) {
    const html = /*html */ `
        
        <li>${product.name} - ${product.inStock}</li>
        
        `;

    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}
/*
function filterCourses() {
  const selectElement = document.querySelector("#select-filter-ects");
  const selectValue = selectElement.value;
  console.log(selectValue);

  let filteredCourses;
  //husk først courses.filter og derefter course.
  if (selectValue === "5") {
    filteredCourses = courses.filter((course) => course.ectsPoints === 5);
  } else if (selectValue === "10") {
    filteredCourses = courses.filter((course) => course.ectsPoints === 10);
  } else if (selectValue === "15") {
    filteredCourses = courses.filter((course) => course.ectsPoints === 15);
  } else if (selectValue === "20") {
    filteredCourses = courses.filter((course) => course.ectsPoints === 20);
  } else {
    filteredCourses = courses;
  }

  //vi gøre vore inner html for courses clear igen når vi filtrer
  document.querySelector("#courses-list").innerHTML = "";

  //her filtrere vi hver enkelt course udfra
  for (const course of filteredCourses) {
    const myhtml = `
    
    <li> ${course.name} - ${course.ectsPoints}</li>
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", myhtml);
  }
}*/

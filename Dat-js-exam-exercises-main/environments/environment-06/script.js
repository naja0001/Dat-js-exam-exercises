"use strict";

//1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
//2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
//3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
/*window.addEventListener("load", start);

const product = [
  {
    name: "makrel",
    price: 18,
    inStock: true,
  },
  {
    name: "tunsalat",
    price: 12,
    inStock: false,
  },
  {
    name: "ost",
    price: 20,
    inStock: true,
  },
];
console.log(product);

function start() {
  showProduct();
}

function showProduct() {
  const productInStock = product.filter((product) => product.inStock);

  for (const product of productInStock) {
    const html =  `
    
    <li>${product.name} - inStock ${product.inStock}</li>


    `;

    document.querySelector("#products").insertAdjacentHTML("beforeend", html);
  }
  console.log(productInStock);
}
*/

//1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
//2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
//3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

window.addEventListener("load", start);

function start() {
  showproducts();

  document
    .querySelector("#create-form")
    .addEventListener("submit", createNewAnimal);
  console.log("yaay");
}

const products = [
  {
    name: "tunsalat",
    price: 18,
    inStock: false,
  },
  {
    name: "salat",
    price: 11,
    inStock: true,
  },
  {
    name: "banan",
    price: 2,
    inStock: true,
  },
];

function showproducts() {
  document.querySelector("#list-container").innerHTML = "";
  const sortByInStock = products.sort((a, b) => b.inStock - a.inStock);

  for (const product of sortByInStock) {
    const html = /*html */ `
    <li> ${product.name} - ${product.price} - ${product.inStock} </li>
    `;
    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}

function createNewAnimal(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const price = Number(form.price.value);
  const inStock = form.inStock.checked;

  const newProduct = { name, price, inStock };

  products.push(newProduct);

  showproducts();

  form.reset();
}

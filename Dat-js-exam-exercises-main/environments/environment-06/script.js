"use strict";

//1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
//2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
//3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
window.addEventListener("load", start);

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
    const html = /*html */ `
    
    <li>${product.name} - inStock ${product.inStock}</li>


    `;

    document.querySelector("#products").insertAdjacentHTML("beforeend", html);
  }
  console.log(productInStock);
}

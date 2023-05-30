"use strict";

//*NB: Øvelse 15, 16, 17 og 18 kan alle kombineres i den samme script.js fil*

//1. Indlæs JSON-filen `products.json` og vis listen af produkter på siden. Brug den udkommenterede HTML-kode som skabelon.
//2. Lav en global liste `basket`, og en funktion der tilføjer et produkt til den liste når der trykkes på "Læg i kurv"-knappen
//3. Vis indholdet af kurven på siden (opdatér når der bliver tilføjet et produkt)

window.addEventListener("load", start);

const basket = [];

async function start() {
  const products = await getProduct();
  console.log(products);
  showProducts(products);
}

async function getProduct() {
  const response = await fetch("products.json");
  const data = await response.json();
  return data;
}

//we need products as argument for it to have access to json file
function showProducts(products) {
  for (const product of products) {
    const html = /*html */ `
    <article>
               <h3>${product.name}</h3>
               <p>vægt: ${product.weight} g</p>
               <p>pris: ${product.price},-</p>
               <button>Læg i kurv</button>
            </article>
    
    `;
    document.querySelector("#products").insertAdjacentHTML("beforeend", html);

    document
      .querySelector("#products article:last-child")
      .addEventListener("click", () => addToBasket(product));
  }
}

function addToBasket(product) {
  console.log(product);
  basket.push(product);

  //vi skal clear the basket hver gang vi tilføjer et nyt roduct
  //ellers vil den loope hele procutet og dublikere de samme produter igen og igen.

  document.querySelector("#basket").innerHTML = "";


  for (const product of basket) {
    const myhtml = /*html */ `
      <li>${product.name} </li>
    `;
    document.querySelector("#basket").insertAdjacentHTML("beforeend", myhtml);
  }
}

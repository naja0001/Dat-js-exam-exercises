"use strict";

//1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
//2. Lav en funktion der viser en sorteret liste af alle produkter. Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.
//3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

window.addEventListener("load", start);

const products = [
  {
    name: "makrel",
    price: 18,
    inStock: true,
  },
  {
    name: "tunsalat",
    price: 12,
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
    .querySelector("#create-form")
    .addEventListener("submit", createNewProduct);
}

function showProduct() {
  document.querySelector("#list-container").innerHTML = "";
  const sortProduct = products.sort((a, b) => b.inStock - a.inStock);

  for (const product of sortProduct) {
    const html =/*html */ `
        
        <li>${product.name} - ${product.inStock}</li>
        
        `;

    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}

//lav en liste det oprette nyt object

function createNewProduct(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const price = Number(form.price.value);
  const inStock = form.stock.checked;

  const newproduct = {
    name,
    price,
    inStock,
  };

  products.push(newproduct);
  console.log(newproduct);
  showProduct(newproduct);
}

/*

window.addEventListener("load", start);

const students = [];

console.log(students);

function start() {
  createNewStudent();
  showStudents();

  document.querySelector("#create-form").addEventListener("submit", addStudent);
}

function addStudent(event) {
  event.preventdeafult();

  const form = event.target;

  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);

  const newStudent = createNewStudent(name, email, age);

  students.push(newStudent);
}

function createNewStudent(name, email, age) {
  return {
    name,
    email,
    age,
  };
}

function showStudents() {
  document.querySelector("#...").innerHTML = "";
  students.sort((a, b) => b.name.localeComapre(a.name));

  for (const student of students) {
    if (students.age >= 18) {
      const html =  `
    
    ${student.name} - ${student.age}
    
    `;

      document
        .querySelector("#list-container")
        .insertAdjacentHTML("beforeend", html);
    }
  }
}
*/


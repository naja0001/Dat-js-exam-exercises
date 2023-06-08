"use strict";

//1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
//2. Lav en funktion der viser listen af alle `animal`-objekter - sorteret efter `age`.
//3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal`-objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

window.addEventListener("load", start);

let animals = [
  {
    name: "doggie",
    type: "dog",
    age: 9,
  },
  {
    name: "kittie",
    type: "kat",
    age: 5,
  },
  {
    name: "raven",
    type: "bunny",
    age: 15,
  },
];

function start() {
  console.log("yaa");

  document
    .querySelector("#create-form")
    .addEventListener("submit", createAnimalByForm);

  showAnimals();
}

function showAnimals() {
  animals.sort((a, b) => a.age - b.age);
  document.querySelector("#list-container").innerHTML = "";

  for (const animal of animals) {
    const html = /*html */ `
    <li> ${animal.name} - ${animal.type} - ${animal.age} </li>
    `;
    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}

function createAnimalByForm(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;

  getNewAnimal(name, age, type);

  showAnimals();
}

function getNewAnimal(name, age, type) {
  const newAnimal = { name, age, type };

  animals.push(newAnimal);
}

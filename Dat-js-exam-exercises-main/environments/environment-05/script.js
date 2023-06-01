"use strict";

//1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
//2. Lav en funktion der viser listen af alle `animal`-objekter - sorteret efter `age`.
//3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal`-objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

/*
window.addEventListener("load", start);

const animal = [
  {
    name: "ronnie",
    type: "dog",
    age: 30,
  },
  {
    name: "kitty",
    type: "cat",
    age: 2,
  },
  {
    name: "fred",
    type: "frog",
    age: 24,
  },
];

function start() {
  showAnimal();
  console.log(animal);
}

function showAnimal() {
  const sortAnimalByAge = animal.sort((a, b) => a.age - b.age);

  for (const animal of sortAnimalByAge) {
    const html =  ` <li>${animal.name} - Age: ${animal.age}</li>

    `;

    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
}
*/

/*

function showAnimals(animals) {
  
  const sortByAage = animals.sort((a, b) => a.age - b.age);

  sortByAage.forEach((animal) => {
    //const myAnimals = `
  
  <div>
    <p> Name:${animal.name}, age: ${animal.age}</p>
  </div>

  `;

    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", myAnimals);
  });
}*/

//1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
//2. Lav en funktion der viser listen af alle `animal`-objekter - sorteret efter `age`.
//3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal`-objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

window.addEventListener("load", start);

function start() {
  console.log("Yaay");

  showAnimals();

  document
    .querySelector("#create-form")
    .addEventListener("submit", createNewanimal);
}

const animals = [
  {
    name: "fluffy",
    type: "dog",
    age: 12,
  },
  {
    name: "kitty",
    type: "cat",
    age: 16,
  },
  {
    name: "pop",
    type: "kanin",
    age: 23,
  },
];

function showAnimals() {
  document.querySelector("#list-container").innerHTML = "";
  const sortByAge = animals.sort((a, b) => a.age - b.age);

  for (const animal of sortByAge) {
    const html = /*html */ `
    <li> ${animal.name} - ${animal.age} </li>
    `;
    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}

function createNewanimal(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const type = form.type.value;
  const age = form.age.value;

  const newAnimal = { name, type, age };

  animals.push(newAnimal);

  console.log(newAnimal);

  showAnimals();
}

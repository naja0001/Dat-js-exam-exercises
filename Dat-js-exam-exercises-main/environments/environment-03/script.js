"use strict";

//1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
//2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
//3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.

window.addEventListener("load", start);

const animals = [];

function start() {
  document
    .querySelector("#create-form")
    .addEventListener("submit", createNewAnimal);
}

function getNewAnimal(name, type, age) {
    // nyt animal objekt med værdier fra argumenter

  const newAnimal = { name, age, type };

  animals.push(newAnimal);

  console.log(newAnimal);
}

function createNewAnimal(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const type = form.type.value;
  const age = Number(form.age.value);

  getNewAnimal(name, type, age);

  showAnimals();
}

function showAnimals() {
  const sortByName = animals.sort((a, b) => a.name.localeCompare(b.name));
  document.querySelector("#list-container").innerHTML = "";
  for (const animal of animals) {
    const html = /*html */ `
    <li> ${animal.name} ${animal.type} ${animal.age} </li>
    `;
    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}

  
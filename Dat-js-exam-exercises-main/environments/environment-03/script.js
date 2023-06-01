"use strict";

//1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og returnerer det.
//2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden.
//3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.
/*
window.addEventListener("load", start);

function start() {
  document.querySelector("#btn-new").addEventListener("click", createAnimal);
}

function createAnimal(name, type, age) {
  const animal = {
    Name: name,
    Type: type,
    Age: age,
  };
  return animal;
}

function listOfAnimals() {
  let animalList = [];

  animalList.sort((a, b) => a.name.loacalecompare(b.name));

  animalList.push(createAnimal(name, type, age));
}
*/

//1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
//2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
//3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.

window.addEventListener("load", start);

let animals = [];

function start() {
  console.log("yayy");

  document
    .querySelector("#create-form")
    .addEventListener("submit", CreateNewAnimal);

  showAnimals();
}

function createAnimal(name, type, age) {
  const newAnimal = { name, type, age };

  animals.push(newAnimal);
  console.log(animals);
}

function CreateNewAnimal(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const type = form.type.value;
  const age = Number(form.age.value);

  createAnimal(name, type, age);

  console.log(animals);

  showAnimals();
}

function showAnimals() {
  document.querySelector("#list-container").innerHTML = "";
  const sortbyName = animals.sort((a, b) => a.name.localeCompare(b.name));
  for (const animal of sortbyName) {
    const html = /*html */ `
    <li> ${animal.name} - ${animal.type} - ${animal.age}</li>
    `;

    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}


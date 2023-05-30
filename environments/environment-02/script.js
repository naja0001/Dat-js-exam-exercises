"use strict";

//1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og returnerer det.
let animalList = [];

window.addEventListener("load", start);

function start() {
  document
    .querySelector("#create_form")
    .addEventListener("submit", () => getAnimal.push(input.value));
}

function getAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };

  return animal;
}

//2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden.
/*
function createNewAnimal(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.animal_name.value;
  const type = form.animal_type.value;
  const age = form.animal_age.value;

  const response = getAnimal(name, type, age);
  console.log(response);
}

//3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.

function showAnimals() {
  document.querySelector("#list-container").innerHTML = "";
}*/

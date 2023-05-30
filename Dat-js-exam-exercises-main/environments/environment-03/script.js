"use strict";

//1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og returnerer det.
//2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden.
//3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.

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

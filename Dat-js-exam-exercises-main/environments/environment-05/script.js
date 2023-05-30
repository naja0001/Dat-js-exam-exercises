"use strict";

//1. Lav en liste med tre `animal` objekter. Hvert objekt har følgende properties: `name`, `type` og `age`.
//2. Lav en funktion der viser listen af alle `animal`-objekter - sorteret efter `age`.
//3. Lav en funktion der ved hjælp af formularen, opretter et nyt `animal`-objekt og tilføjer det til den liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

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
    const html = /*html */ ` <li>${animal.name} - Age: ${animal.age}</li>

    `;

    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
}



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

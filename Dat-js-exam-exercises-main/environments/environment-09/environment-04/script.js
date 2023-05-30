"use strict";

import { teachers } from "./teachers.js";
//1. Importer `teachers`-listen i `script.js`.
//2. Lav en funktion i `script.js`, der viser listen af alle `teacher`-objekter på websiden.
//3. Lav en funktion der kan sortere listen efter `name` og en anden funktion, der kan sortere listen efter `email`.

console.log(teachers);

window.addEventListener("load", start);

function start() {
  showTeachers();
  sortByNames();
  sortByEmails();
}

//husk altid når der er flere objekter brig altid for of loops
function showTeachers() {
  for (const teacher of teachers) {
    const html = /*html */ `

  <li>${teacher.name} -  ${teacher.email}</li>

  `;
    document
      .querySelector("#teachers-list1")
      .insertAdjacentHTML("beforeend", html);
  }
}

function sortByNames() {
  const sortByName = teachers.sort((a, b) => a.name.localeCompare(b.name));
  for (const teacher of sortByName) {
    const html = /*html */ `

  <li>${teacher.name} -  ${teacher.email}</li>
  
  `;
    document
      .querySelector("#teachers-list2")
      .insertAdjacentHTML("beforeend", html);
  }
}

function sortByEmails() {
  const sortByEmail = teachers.sort((a, b) => a.email.localeCompare(b.email));

  for (const teacher of sortByEmail) {
    const html = /*html */ `

  <li>${teacher.name} -  ${teacher.email}</li>
  
  `;
    document
      .querySelector("#teachers-list3")
      .insertAdjacentHTML("beforeend", html);
  }
}

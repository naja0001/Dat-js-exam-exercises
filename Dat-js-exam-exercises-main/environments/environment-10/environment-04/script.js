"use strict";

import { teachers } from "./teachers.js";
console.log(teachers);
//1. Importer `teachers`-listen i `script.js`.
//2. Lav en funktion, der viser listen af alle `teacher`-objekter på websiden.
//3. Lav en funktion der tilføjer et nyt `teacher`-objekt til listen. Sørg for at nye `teacher`-objekter vises på websiden.

window.addEventListener("load", start);

function start() {
  showTeachers();
}

function showTeachers() {
  for (const teacher of teachers) {
    const html = /*html */ `

    <li>${teacher.name} - ${teacher.email}</li>
    `;

    document
      .querySelector("#teachers-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

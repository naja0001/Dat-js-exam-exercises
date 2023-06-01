"use strict";

/*
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
    const html =`

    <li>${teacher.name} - ${teacher.email}</li>
    `;

    document
      .querySelector("#teachers-list")
      .insertAdjacentHTML("beforeend", html);
  }
}
*/

//1. Importer `teachers`-listen i `script.js`.
//2. Lav en funktion, der viser listen af alle `teacher`-objekter på websiden.
//3. Lav en funktion der tilføjer et nyt `teacher`-objekt til listen. Sørg for at nye `teacher`-objekter vises på websiden.

import { teachers } from "./teachers.js";

console.log(teachers);

window.addEventListener("load", start);

function start() {
  document
    .querySelector("#create-form")
    .addEventListener("submit", createTeacher);
  showTeachers();
}

function showTeachers() {
  document.querySelector("#teachers-list").innerHTML = "";
  for (const teacher of teachers) {
    const html = /*html */ `
    <li> ${teacher.name} - ${teacher.email} </li>
    `;
    document
      .querySelector("#teachers-list")
      .insertAdjacentHTML("beforeend", html);
  }
}
/*
function createNewTeacher(name, email) {
  const newTeacher = { name, email };

  teachers.push(newTeacher);

  showTeachers();
}

createNewTeacher("Naima", "kjbdkj@hej.com");*/

function createTeacher(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const email = form.email.value;

  const newTeacher = { name, email };

  teachers.push(newTeacher);

  showTeachers();
}

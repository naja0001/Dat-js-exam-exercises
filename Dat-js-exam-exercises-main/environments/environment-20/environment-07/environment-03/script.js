"use strict";

//1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
//2. Udskriv listen til websiden hver gang der bliver tilføjet en ny student.
//3. Sortér listen efter `age` så de yngste vises først.

window.addEventListener("load", start);

let students = [];
console.log(students);

function start() {
  document.querySelector("#btn1").addEventListener("click", createNewStudent);

  showStudents();
}

function createNewStudent(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);

  let newStudent = { name, email, age };

  students.push(newStudent);

  showStudents();
}

function showStudents() {
  for (const student of students) {
    const html = /*html */ `
    
    ${student.name} - ${student.email} - ${student.age}
    
    `;
    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", html);
  }
}

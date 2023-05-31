"use strict";

//1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
//2. Udskriv listen til websiden hver gang der bliver tilføjet en ny student.
//3. Sortér listen efter `age` så de yngste vises først.

window.addEventListener("load", start);

let students = [];
console.log(students);

function start() {
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", createNewStudent);

  showStudents();
}

function createNewStudent(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const email = form.mail.value;
  const age = Number(form.age.value);

  const newStudent = { name, email, age };

  students.push(newStudent);

  showStudents();
}

function showStudents() {
  const sortByAge = students.sort((a, b) => a.age - b.age);

  document.querySelector("#students-table-body").innerHTML = "";
  for (const student of sortByAge) {
    const html = /*html */ `
    
   <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr>
    
    `;
    document
      .querySelector("#students-table-body")
      .insertAdjacentHTML("beforeend", html);
  }
}

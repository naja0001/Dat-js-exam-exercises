"use strict";

//1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
//2. Lav en anden funktion til at vise listen på websiden, men undlad eventuelle students der er under 18 år.
//3. Sortér listen alfabetisk efter `name`.

window.addEventListener("load", start);

let students = [];

function start() {
  console.log("yaaay");

  document
    .querySelector("#create-student-form")
    .addEventListener("submit", createNewStudent);
}

function createNewStudent(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);

  const newStudent = { name, email, age };

  students.push(newStudent);
  console.log(students);

  showStudents();
}

function showStudents() {
  const sortByName = students.sort((a, b) => a.name.localeCompare(b.name));
  document.querySelector("#students-table-body").innerHTML = "";

  for (const student of sortByName) {
    if (student.age >= 18) {
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
}

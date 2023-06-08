"use strict";

//1. Lav en funktion der opretter et `student` objekt med `name`, `email` og `age`, fra formularen på websiden og tilføjer det til en liste.
//2. Udskriv listen til websiden hver gang der bliver tilføjet en ny student.
//3. Sortér listen efter `age` så de yngste vises først.

window.addEventListener("load", start);

const students = [];

function start() {
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", CreateByForm);
}

function CreateByForm(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const age = Number(form.age.value);
  const email = form.email.value;

  createNewStudent(name, email, age);

  showStudents();
}

function createNewStudent(name, email, age) {
  const newStudent = { name, email, age };

  students.push(newStudent);

  console.log(newStudent);
}

function showStudents() {
  students.sort((a, b) => a.age - b.age);

  document.querySelector("#students-table-body").innerHTML = "";
  for (const student of students) {
    const html = /*html */ `
          <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
          </tr> `;
    document
      .querySelector("#students-table-body")
      .insertAdjacentHTML("beforeend", html);
  }
}

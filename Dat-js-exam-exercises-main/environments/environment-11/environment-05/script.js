"use strict";
/*

console.log(courses);

//1. Importer `courses`-listen i `script.js`.
//2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `ectsPoints` og `teacher`.
//3. Lav en funktion der tilføjer et nyt `course`-objekt til listen. Sørg for at nye `course`-objekter vises på websiden.

window.addEventListener("load", start);

function start() {
  showCourses();
}

function showCourses() {
  for (const course of courses) {
    const html =  `
    
    <li> ${course.name} - ${course.ectsPoints} - ${course.teacher} </li>
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
}
*/

import { courses } from "./courses.js";

console.log(courses);

//1. Importer `courses`-listen i `script.js`.
//2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `ectsPoints` og `teacher`.
//3. Lav en funktion der tilføjer et nyt `course`-objekt til listen. Sørg for at nye `course`-objekter vises på websiden.

window.addEventListener("load", start);

function start() {
  showCourses();
}

function showCourses() {
  for (const course of courses) {
    const html = /*html */ `
    <li> ${course.name} - ${course.ectsPoints} - ${course.teacher} </li>
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function createNewCourse(name, ectsPoints, teacher) {
  const newCourse = { name, ectsPoints, teacher };

  courses.push(newCourse);

  showCourses();
}

createNewCourse("web development", 15, "Naima j");

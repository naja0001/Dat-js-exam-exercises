"use strict";

import { courses } from "./courses.js";

console.log(courses);

//1. Importer `courses`-listen i `script.js`.
//2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
//3. Lav en funktion, der sorterer listen af `courses` efter stigende antal ECTS. Vis den sorterde liste på websiden.

window.addEventListener("load", start);

function start() {
  showCourses();
}

//spørg om man SKAL lave en ny function

function showCourses() {
  const sortByECTS = courses.sort((a, b) => a.ectsPoints - b.ectsPoints);

  for (const course of sortByECTS) {
    const html = /*html */ `
    
  <li>${course.name} -  ${course.ectsPoints}</li>
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

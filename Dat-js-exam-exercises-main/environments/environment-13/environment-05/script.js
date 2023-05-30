"use strict";
import { courses } from "./courses.js";
console.log(courses);
//1. Importér `courses`-listen i `script.js`.
//2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
//3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`). Filtreringen ændrer sig hver gang en ny `option` vælges.

window.addEventListener("load", start);

function start() {
  showCourses();

  //betyder at npr select cklickes vil der ske en change of filterCourses vil blive executed
  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", filterCourses);
}
//we dont need courses as arument because its alreade in our scope (global)
function showCourses() {
  for (const course of courses) {
    const html = /*html */ `
    
    <li> ${course.name} - ${course.ectsPoints}</li>
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function filterCourses() {
  const selectElement = document.querySelector("#select-filter-ects");
  const selectValue = selectElement.value;
  console.log(selectValue);

  let filteredCourses;
  //husk først courses.filter og derefter course.
  if (selectValue === "5") {
    filteredCourses = courses.filter((course) => course.ectsPoints === 5);
  } else if (selectValue === "10") {
    filteredCourses = courses.filter((course) => course.ectsPoints === 10);
  } else if (selectValue === "15") {
    filteredCourses = courses.filter((course) => course.ectsPoints === 15);
  } else if (selectValue === "20") {
    filteredCourses = courses.filter((course) => course.ectsPoints === 20);
  } else {
    filteredCourses = courses;
  }

  //vi gøre vore inner html for courses clear igen når vi filtrer
  document.querySelector("#courses-list").innerHTML = "";

  //her filtrere vi hver enkelt course udfra
  for (const course of filteredCourses) {
    const myhtml = /*html */ `
    
    <li> ${course.name} - ${course.ectsPoints}</li>
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", myhtml);
  }
}

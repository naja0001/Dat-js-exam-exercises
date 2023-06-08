"use strict";

//1. Importér `courses`-listen i `script.js`.
//2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
//3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`). Filtreringen ændrer sig hver gang en ny `option` vælges.

import { courses } from "./courses.js";
console.log(courses);

window.addEventListener("load", start);

function start() {
  showCourses();

  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", selectByOption);

  findCourse();
}

function showCourses() {
  document.querySelector("#courses-list").innerHTML = "";
  for (const course of courses) {
    const html = /*html */ `
    <li> ${course.name} - ${course.ectsPoints} </li>
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function selectByOption() {
  console.log("yaay");
  const selectValue = document.querySelector("#select-filter-ects").value;

  let sortByects;

  if (selectValue === "5") {
    sortByects = courses.filter((course) => course.ectsPoints === 5);
  } else if (selectValue === "10") {
    sortByects = courses.filter((course) => course.ectsPoints === 10);
  } else if (selectValue === "15") {
    sortByects = courses.filter((course) => course.ectsPoints === 15);
  } else if (selectValue === "20") {
    sortByects = courses.filter((course) => course.ectsPoints === 20);
  }

  showCourses();
}

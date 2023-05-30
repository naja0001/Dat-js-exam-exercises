import { courses } from "./courses.js";
console.log(courses);

//1. Importér `courses`-listen i `script.js`.
//2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `startDate` `ectsPoints`.
//3. Lav en funktion, der sorterer listen af `courses` stigende efter `startDate`. Vis sorteringen på websiden.

window.addEventListener("load", start);

function start() {
  showCourses();
}

function showCourses() {
  //localeCompare er for strings mens a-b er for numbers og boolean (true = 1 mens false=0)
  const sortCoursesByDate = courses.sort((a, b) =>
    a.startDate.localeCompare(b.startDate)
  );
  for (const course of sortCoursesByDate) {
    const html = /*html */ `
    
    <li> ${course.name} -  ${course.startDate} -  ${course.ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

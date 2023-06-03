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

  //for in
  /*
  for (let object in sortCoursesByDate) {
    const html =  `
    
    <li> ${sortCoursesByDate[object].name} -  ${sortCoursesByDate[object].startDate} -  ${courses[object].ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }*/

  //forEach
  /*
  courses.forEach((course) => {
    const html = `
    
    <li> ${course.name} -  ${course.startDate} -  ${course.ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  });*/

  //for of
  /*
  for (const course of courses) {
    const html = `
    
    <li> ${course.name} -  ${course.startDate} -  ${course.ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }*/

  //for loop
  /*
  for (let i = 0; i < courses.length; i++) {
    const html =  `
    
    <li> ${courses[i].name} -  ${courses[i].startDate} -  ${courses[i].ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);
  }
  */

  //for while

  let i = 0;

  while (i < courses.length) {
    const html = `
    
    <li> ${courses[i].name} -  ${courses[i].startDate} -  ${courses[i].ectsPoints} </li>
    
    
    `;
    document
      .querySelector("#courses-list")
      .insertAdjacentHTML("beforeend", html);

    i++;
  }
}

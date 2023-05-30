"use strict";

window.addEventListener("load", initApp);

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.

async function initApp() {
  const users = await getUsers();
  console.log(users);

  filterUsers(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function filterUsers(users) {
  const adminUsers = users.filter((user) => user.role === "admin");
  console.log(adminUsers);

  for (const user of adminUsers) {
    showUsers(user);
    console.log(adminUsers);
  }
}
//2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.

function showUsers(users) {
  console.log(users);

  const myUsers = /* html */ `
  
  
  <p>Name: ${users.name} <br> Active: ${users.active} <br> Role: ${users.role}</p>
  
  
  `;

  document.querySelector("#userlist").insertAdjacentHTML("beforeend", myUsers);
}

//3. Filtrér listen så den kun viser admin-brugere.

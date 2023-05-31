"use strict";

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
//2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.
//3. Filtrér listen så den kun viser admin-brugere.

/*
window.addEventListener("load", initApp);

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

function showUsers(users) {
  console.log(users);

  const myUsers =  `
  
  
  <p>Name: ${users.name} <br> Active: ${users.active} <br> Role: ${users.role}</p>
  
  
  `;

  document.querySelector("#userlist").insertAdjacentHTML("beforeend", myUsers);
} */

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
//2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.
//3. Filtrér listen så den kun viser admin-brugere.

window.addEventListener("load", start);

async function start() {
  const users = await getUsers();
  console.log(users);

  showUsers(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers(users) {
  const filteredUsers = users.filter((user) => user.role === "admin");
  for (const user of filteredUsers) {
    const html = /*html */ `
    <li>${user.name} - ${user.active} - ${user.role}</li>
    `;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

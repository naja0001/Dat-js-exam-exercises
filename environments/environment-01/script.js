"use strict";

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
//2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.
//3. Filtrér listen så den kun viser admin-brugere

window.addEventListener("load", initApp);

async function initApp() {
  const users = await getUsers();

  showUsers(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();

  return data;
}

function showUsers(users) {
  const adminusers = users.filter((user) => user.role === "admin");
  for (const user of adminusers) {
    const html = /*html */ `

<li> ${user.name} - active: ${user.active}</li>


`;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

/*
async function initApp() {
    const users = await getUseres();

    console.log(users);
}

//del 1

async function getUsers() {
    const response = await fetch ("users.json");
    const data = await response.json();

    return data;
}

//del 2

function showUsers () {
    for (const user of users) {
        const html = /* html */

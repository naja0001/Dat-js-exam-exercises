"use strict";

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
//2. Lav en funktion der viser listen på websiden.
//3. Lav en funktion der tæller hvor mange brugere der har rollerne `admin`, `user` og `guest` - og viser antallene på websiden.
/*
window.addEventListener("load", start);

async function start() {
  const users = await getUsers();
  console.log(users);

  showUsers(users);
  countUsers(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

//2. Lav en funktion der viser listen på websiden.

function showUsers(users) {
  console.log(users);

  for (const user of users) {
    const myUsers = `

<div>

<p>${user.name} ${user.active} ${user.role} </p>

</div>
`;

    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", myUsers);
  }
}
//3. Lav en funktion der tæller hvor mange brugere der har rollerne `admin`, `user` og `guest` - og viser antallene på websiden.

function countUsers(users) {
  let adminCount = 0;
  let guestCount = 0;
  let userCount = 0;

  for (const user of users) {
    if (user.role === "admin") {
      adminCount++;
    } else if (user.role === "guest") {
      guestCount++;
    } else if (user.role === "user") {
      userCount++;
    }
  }

  document.querySelector("#admin-count").textContent = adminCount;
  document.querySelector("#guest-count").textContent = guestCount;
  document.querySelector("#user-count").textContent = userCount;
}
*/

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
//2. Lav en funktion der viser listen på websiden.
//3. Lav en funktion der tæller hvor mange brugere der har rollerne `admin`, `user` og `guest` - og viser antallene på websiden.

"use strict";

window.addEventListener("load", start);

async function start() {
  const users = await getUsers();

  console.log(users);

  showUsers(users);
  countRoles(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers(users) {
  for (const user of users) {
    const html = /*html */ `
    
    <li> ${user.name} - ${user.id} - ${user.active} - ${user.role}  </li>

    `;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

function countRoles(users) {
  let adminCount = 0;
  let guestCount = 0;
  let userCount = 0;

  for (const user of users) {
    if (user.role === "admin") {
      adminCount++;
    } else if (user.role === "guest") {
      guestCount++;
    } else if (user.role === "user") {
      userCount++;
    }
  }

  //forskellen på innerHTML og textconten er innerHTML ændre alt + tags
  //mens textcontent kun ændre texten
  document.querySelector("#admin-count").textContent = adminCount;
  document.querySelector("#guest-count").textContent = guestCount;
  document.querySelector("#user-count").textContent = userCount;
}

"use strict";

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.
//2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
//3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties,
// og tilføjer objektet til den globale liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
/*
window.addEventListener("load", start);

let users = [];

async function start() {
  await getUsers();
  showUsers();
  console.log(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  users = await response.json(); //det er users der awaiter response

  // vi behøver ingen return da den direkte gemme i vores globale variable.
}

function showUsers() {
  const activeUsers = users.filter((user) => user.active);

  for (const user of activeUsers) {
    const html =  ` <li>${user.name} - aktive: ${user.active}</li>

    `;

    document
      .querySelector("#teachers-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function CreateNewUser(name, active, role) {
  const newUser = { name, active, role };

  users.push(newUser);
  showUsers();
}

CreateNewUser("Naima", true, "admin");
console.log(users);

//const newUser = users.push(new CreateUser("Naima", true, "admin"));

/*
"use strict";

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.
//2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
//3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties, og tilføjer objektet til den globale liste. Listen på websiden opdateres hver gang, der opretteres et nyt objekt.

window.addEventListener("load", start);

async function start() {
  users = await getUsers();
  console.log(users);

  const activeUsers = filterUsers(users);

  for (const user of activeUsers) {
    showUsers(user);
    console.log(activeUsers);
  }

  opretUser("Naima", true, "admin");
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function showUsers(users) {
  console.log(users);

  const myUsers =  `
  
  <div>
        <p> ${users.name}: ${users.active}</p>
  </div>
  
  `;

  document.querySelector("#userlist").insertAdjacentHTML("beforeend", myUsers);
}

function filterUsers(users) {
  const activeUsers = users.filter((user) => user.active);
  return activeUsers;
}

function opretUser(name, active, role) {
  console.log(users);
  const newUser = { name, active, role };
  users.push(newUser);
  showUsers(users);
}

//spørg peter/race hvorfor den er undefined

*/

//1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.
//2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
//3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties,
// og tilføjer objektet til den globale liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

window.addEventListener("load", start);

let users = [];

async function start() {
  await getUsers();

  console.log(users);

  showUsers();
}

async function getUsers() {
  const response = await fetch("users.json");
  users = await response.json();
}

function showUsers() {
  const filterAktiveUsers = users.filter((user) => user.active);

  for (const user of filterAktiveUsers) {
    const html = /*html */ `
    <li> ${user.name} - ${user.active} </li>
    `;
    document
      .querySelector("#teachers-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function createNewUser(name, role, active) {
  document.querySelector("#teachers-list").innerHTML = "";

  const newUser = { name, role, active };

  users.push(newUser);

  showUsers();
}

createNewUser("Naima", "admin", true);
createNewUser("hans", "admin", true);

console.log(users);

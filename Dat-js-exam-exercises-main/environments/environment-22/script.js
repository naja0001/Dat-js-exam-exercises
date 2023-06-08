"use strict";

//1. Lav en funktion der indlæser JSON-filen `playlist.json` og gemmer listen i en variabel.
//2. Lav en funktion til at udskrive listen af sange på websiden- tilføj en `remove`-knap til hver sang.
//3. Få remove-knappen til at fjerne den pågældende sang fra listen, og udskriv listen igen.

window.addEventListener("load", start);

let playlist = [];

async function start() {
  playlist = await getPlaylist();
  console.log(playlist);
  showPlaylist();
}

async function getPlaylist() {
  const response = await fetch("playlist.json");
  const data = await response.json();
  return data;
}

function showPlaylist() {
  document.querySelector("#songlist").innerHTML = "";

  for (const song of playlist) {
    const html = /*html */ `
    <li> ${song.artist},  ${song.title},  ${song.duration} <button>remove</button></li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document
      .querySelector("#songlist li:last-child button")
      .addEventListener("click", () => removeClicked(song));
  }
}

function removeClicked(song) {
  console.log("clicked");
  /*playlist.splice(index, 1);
  showPlaylist();*/

  playlist = playlist.filter((item) => item !== song);
  showPlaylist();
}
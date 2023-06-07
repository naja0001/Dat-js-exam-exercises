"use strict";

//1. Lav en funktion der indlæser JSON-filen `playlist.json` og gemmer listen i en variabel.
//2. Lav en funktion til at udskrive listen af sange på websiden- tilføj en `remove`-knap til hver sang.
//3. Få remove-knappen til at fjerne den pågældende sang fra listen, og udskriv listen igen.
/*
window.addEventListener("load", start);

let playlist = [];

async function start() {
  playlist = await getPlaylist();
  showPlaylist();
  console.log(playlist);
}

async function getPlaylist() {
  const response = await fetch("playlist.json");
  const data = await response.json();
  return data;
}

function showPlaylist() {
  document.querySelector("#songlist").innerHTML = ""; // Clear the songlist

  for (let i = 0; i < playlist.length; i++) /*for (const song of playlist) {
    const html =  `
    <li> ${playlist[i].artist}, ${playlist[i].title}, ${playlist[i].duration} <button> remove </button></li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

    document
      .querySelector("#songlist li:last-child button")
      .addEventListener("click", () => removeClicked(i)); //index som argument: for at remove den specifikke sang vi kilkker på
  }
}

function removeClicked(index) {
  console.log("clicked");
  playlist.splice(index, 1); // et object bliver removed
  showPlaylist();
}*/

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
    const html = `
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
/*

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
    const html = `
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
  /*const indexOfsong = playlist.indexOf(song);
  playlist.splice(indexOfsong, 1);
  showPlaylist();

  playlist.filter((item)=> item !== song);



}
*/

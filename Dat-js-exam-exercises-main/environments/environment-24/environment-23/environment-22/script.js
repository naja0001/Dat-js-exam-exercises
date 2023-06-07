"use strict";

//1. Lav en liste over sange, og lav en funktion til at tilføje et sang-objekt med `artist`, `title` og `duration` fra formularen på websiden.
//2. Lav en funktion til at udskrive listen af sange på websiden.
//3. Sortér listen alfabetisk efter `artist` eller `title` alt efter hvad der bliver valgt på websiden.

window.addEventListener("load", start);

const songs = [];

function start() {
  console.log("yaaay");

  document
    .querySelector("#add-song-form")
    .addEventListener("submit", createByForm);

  document
    .querySelector("#sort-songs-form")
    .addEventListener("change", selectByOption);
}

function createByForm(event) {
  event.preventDefault();

  const form = event.target;

  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;

  createSong(artist, title, duration);

  showSongs();
}

function createSong(artist, title, duration) {
  const newSong = { artist, title, duration };

  songs.push(newSong);

  console.log(newSong);
}

function showSongs() {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of songs) {
    const html = /*html */ `
    <li> ${song.artist} ${song.title} ${song.duration} </li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  }
}

function selectByOption(event) {
  const selecByOption = event.target.value;
  console.log(selecByOption);
  sortBy(selecByOption);
}

function sortBy(key) {
  songs.sort((a, b) => a[key].localeCompare(b[key]));

  showSongs();
}

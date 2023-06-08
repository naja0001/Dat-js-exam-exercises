"use strict";

//1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)
//2. Lav en funktion til at udskrive listen af sange på websiden - tilføj en `upvote`-knap til hver sang.
//3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen - udskriv derefter listen igen.
let songs = [
  { artist: "Taylor Swift", title: "Blank space", duration: "4:33" },
  { artist: "Beastie Boys", title: "Sabotage", duration: "3:02" },
  { artist: "Skrillex", title: "Bangarang", duration: "3:35" },
];

window.addEventListener("load", start);

function start() {
  console.log(songs);
  showsongs();

  document
    .querySelector("#sort-songs-form")
    .addEventListener("change", selectSortBy);
}

function showsongs() {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of songs) {
    const html = /*html */ `
    <li> ${song.artist} -${song.title} - ${song.duration} <button>upvote</button></li>
    `;
    document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
    document
      .querySelector("#songlist li:last-child button")
      .addEventListener("click", () => upVote(song));
  }
}

function upVote(song) {
  console.log("clicked");

  const indexOf = songs.indexOf(song);
  

  if (indexOf > 0) {
    songs.splice(indexOf, 1); // Fjern sang fra listen
    songs.splice(indexOf - 1, 0, song); // Indsæt sang et tak op i listen 0 meaning u dont want to remove anything
    showsongs(); // Udskriv listen igen
  }
}

function selectSortBy(event) {
  const selectOption = event.target.value;

  console.log(selectOption);
  sortBy(selectOption);
}

function sortBy(key) {
  songs.sort((a, b) => a[key].localeCompare(b[key]));
  showsongs();
}

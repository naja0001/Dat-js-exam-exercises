"use strict";

//1. Lav en funktion `clicked`, der udskriver "Det virker" i konsollen, når man trykker på knappen på HTML-siden.

window.addEventListener("load", start);

function start() {
  document.querySelector("#btn-knap").addEventListener("click", clicked);
  document.querySelector("#result_success").classList.add("hide");
  document.querySelector("#result_failure").classList.add("hide");
}

function clicked() {
  console.log("det virker");
  document.querySelector("#result_success").classList.add("show");
}

//2. Udvid funktionen så den skjuler teksten `#result_failure` og viser teksten `#result_success` ved hjælp af klasserne `hide` og `show`.
//3. Tilføj en funktion der automatisk skjuler begge tekster så snart siden loades - sørg for at knappen stadig virker og viser den rette tekst.

"use strict";

document.addEventListener("DOMContentLoaded", init);

//Variabel for .typewritten fra HTML
let typeWritten;

//Variabel for indholdet af .typewritten, der skal lagres
let text;

//Variabel for længden af text
let length;

//Variabel for 0
let i = 0;

function init() {
  typeWritten = document.querySelector(".typewritten");

  //Tekstindholder fra typeWritten gemmes
  text = typeWritten.textContent;

  //Længden af tekstindholdet registreres
  length = text.length;

  //Indholdet af .typewritten tømmes
  typeWritten.textContent = "";

  //Loop funktionen kaldes
  loop();
}

function loop() {
  console.log(length);

  if (length > i) {
    //+= tilføjer bogstaverne efter hinanden

    //.typeWritten modtager indhold igen ét bogstav af gangen.
    //Bogstaverne skal "lægges til" hinanden. Dette er effekten af += i stedet for =.
    typeWritten.textContent += text.charAt(i);
    i++;

    //Denne funktion definerer et delay, så bogstaverne kommer forsinket én af gangen
    setTimeout(loop, 500);
  }
}

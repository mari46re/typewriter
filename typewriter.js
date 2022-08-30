"use strict";

document.addEventListener("DOMContentLoaded", init);

let typeWritten;
let text;
let length;

let i = 0;

function init() {
  typeWritten = document.querySelector(".typewritten");
  text = typeWritten.textContent;
  length = text.length;
  typeWritten.textContent = "";
  loop();
}

function loop() {
  console.log(length);

  if (length > i) {
    //+= tilføjer bogstaverne efter hinanden
    typeWritten.textContent += text.charAt(i);
    i++;

    setTimeout(loop, 500);
  }
}

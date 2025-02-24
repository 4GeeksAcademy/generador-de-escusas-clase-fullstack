import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {}
  //write your code here
document.getElementById('btn-excuse').addEventListener('click', function() {
    let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
    let action = ["ate ", "peed ", "crushed ", "broke "];
    let what = ["my homework ", "my phone ", "the car "];
    let when = [
      "before the class.",
      "when I was sleeping.",
      "while I was exercising.",
      "during my lunch.",
      "while I was praying."
    ];
  
    let primeraPalabra = who[Math.floor(Math.random() * who.length)];
    let segundaPalabra = action[Math.floor(Math.random() * action.length)];
    let terceraPalabra = what[Math.floor(Math.random() * what.length)];
    let cuartaPalabra = when[Math.floor(Math.random() * when.length)];
  
    document.getElementById("excuse").innerHTML =
      primeraPalabra + segundaPalabra + terceraPalabra + cuartaPalabra;
  });
  console.log("Hello Rigo from the console!");


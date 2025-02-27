import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  generateExcuse()
  document.getElementById('btn-excuse').addEventListener('click', generateExcuse);
}

function generateExcuse() {
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
  let frase = who[Math.floor(Math.random() * who.length)] +
    action[Math.floor(Math.random() * action.length)] + 
    what[Math.floor(Math.random() * what.length)] + 
    when[Math.floor(Math.random() * when.length)];
  
  document.getElementById("excuse").innerHTML = frase;

}

  //write your code here


  /*
  document.getElementById('btn-excuse').addEventListener('click', function generateNewExcuse() {
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
  
    let primeraFrase = who[Math.floor(Math.random() * who.length)];
    let segundaFrase = action[Math.floor(Math.random() * action.length)];
    let terceraFrase = what[Math.floor(Math.random() * what.length)];
    let cuartaFrase = when[Math.floor(Math.random() * when.length)];
  
    document.getElementById("excuse").innerHTML =
      primeraFrase + segundaFrase + terceraFrase + cuartaFrase;
  });*/


  //console.log("Hello Rigo from the console!");


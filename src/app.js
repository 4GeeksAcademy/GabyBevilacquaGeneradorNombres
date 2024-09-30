/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateDomain();
  console.log("Hello");
};*/
const generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".es", ".io"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domain.length; d++) {
          console.log(pronoun[p] + adj[a] + noun[n] + domain[d]);
        }
      }
    }
  }
};
console.log(generateDomain());

/* 
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = [".com", ".net", ".us", ".io"];

for (let p of pronoun) {                         solucion alternativa mas corta que deberia funcionar
  for (let a of adj) {                           pero segun la leccion "estandares y lineamientos" hay que evitar las variables globales, es decir,
    for (let n of noun) {                        que queden fuera de una funcion cuando son variables que solo van a necesitarse dentro de esa 
      for (let d of domain) {                    funcion en particular.
        let domainsNames = p + a + n + d;
        console.log(domainsNames);
      }
    }
  }
}
*/

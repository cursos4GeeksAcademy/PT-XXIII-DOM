
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//getElementBy o getElementsBy
// cuando hago un getElements osea, en plural, aunque exista 1 elemento que calce con el criterio de búsqueda será siempre un arreglo
//la Key innerHTML es aquel que me muestra el CONTENIDO del elemento html capturado
let h1 = document.getElementsByClassName("mt-5");
console.log(h1[0].innerHTML);
h1[0].innerHTML = "somos terrible bakanes pal DOOM";
h1[0].style.background = "green";

//querySelector
//conseguir el primer elemento que calce con mi criterio de busqueda
let imagen = document.querySelector("img");
imagen.src =
  "https://compass-ssl.xbox.com/assets/23/b6/23b6f32d-f359-43f3-a595-399cb019c603.jpg?n=DOOM-Eternal_GLP-Page-Hero-0_1083x609_02.jpg";

//conseguir todos los elementos que calcen con mi criterio de busqueda
let h = document.querySelectorAll("h1");
h[2].innerHTML =
  "Dato de benja sobre el Doom: El protagonista se suidida para ir al infierno a matar demonios";
h[1].innerHTML = "Dato de Pacheco sobre el Doom: no dijo nada :D";

let ul = document.querySelector("ul");
let nuevo = document.createElement("li");
let texto = document.createTextNode("parece muy violento el juego");
nuevo.appendChild(texto);

ul.insertBefore(nuevo, ul.childNodes[3]);

ul.removeChild(ul.firstElementChild);

/*
while (ul.firstChild) {
  ul.removeChild(ul.firstChild);
}*/

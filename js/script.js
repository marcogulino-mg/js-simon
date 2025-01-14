//Elementi del DOM in OUTPUT
const numList = document.getElementById("numbers-list");

/*Funzione che genera un numero casuale
per scegliere quale indice prendere dall'array*/
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Genero i 5 numeri casuali richiesti
for (let i = 0; i < 5; i++) {
  let randomNumber = randomNum(1, 50);
  numList.innerHTML += `<li class="number">${randomNumber}</li>`;
  console.log(numList.innerHTML);
}
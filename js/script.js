//Elementi del DOM in OUTPUT
const numList = document.getElementById("numbers-list");
const message = document.getElementById("instructions");
const countDown = document.getElementById("countdown");
const result = document.getElementById("message");

//VARs
let seconds = 30;
const generatedNum = [];

//Elementi del DOM in INPUT
const inputNum = document.getElementById("answers-form");
const inputNumList = document.getElementsByClassName("form-control");
const form = document.querySelector("form");

/*Funzione che genera un numero casuale
e lo rigenera se è gia presente in un array*/
function randomNum(min, max, arrayNum) {
  let randNum = Math.floor(Math.random() * (max - min + 1) + min);
  let check = false;

  do {
    for (let i = 0; i < arrayNum.length; i++) {
      if (arrayNum[i] == randNum) {
        randNum = Math.floor(Math.random() * (max - min + 1) + min);
        check = true;
      } else {
        check = false;
      }
    }
  } while (check);

  return randNum;
}

//Genero i 5 numeri casuali richiesti
for (let i = 0; i < 5; i++) {
  let randomNumber = randomNum(1, 50, generatedNum);

  //Salvo una copia del numero in un array
  generatedNum.push(randomNumber);

  numList.innerHTML += `<li class="number">${randomNumber}</li>`;
  console.log(numList.innerHTML);
}

/*Nascondo i numeri casuali dopo 30 secondi e faccio comparire
le caselle in cui inserire i numeri*/
const timer = setInterval(() => {
  countDown.innerHTML = seconds;
  seconds--;

  if (seconds < 0) {
    //Blocco il setInterval
    clearInterval(timer);

    //Svuoto la parte HTML
    countDown.innerHTML = "";
    numList.innerHTML = "";

    //Mostro le caselle d'input e cambio il testo di "instructions"
    message.innerHTML = "Inserisci i numeri che hai memorizzato";
    inputNum.className = "d-block";
  }
}, 1000);

//Controllo se l'utente ha indovinato i numeri

form.addEventListener("submit", (e) => {
  //Blocco il submit del form
  e.preventDefault();

  //Stringa default
  result.innerHTML = `Hai indovinato 0 numeri.`;

  //Controllo i numeri
  let stringNumbs = "";
  let counter = 1;

  for (let j = 0; j < generatedNum.length; j++) {
    for (let z = 0; z < inputNumList.length; z++) {
      if (parseInt(inputNumList[z].value) === generatedNum[j]) {
        result.innerHTML = `Hai indovinato ${counter++} numeri. `;
        stringNumbs += generatedNum[j] + " ";
      }
    }
  }

  result.innerHTML += `( ${stringNumbs})`;
});
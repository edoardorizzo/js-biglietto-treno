/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
- prompt con numero di chilometri
- prompt età passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
- if (user < 18 anni){
    sconto 20%
} else if (user >= 65){
    sconto 40%
} else {
    prezzo normale
}

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca

*/

// Chiedi all'utente i km da percorrere e l'età
const km = Number(prompt("Quanti chilometri vuoi percorrere?"));
const age = Number(prompt("Qual è la tua età?"));

console.log(km, age);

// Calcola il prezzo del biglietto
const pricePerKm = 0.21;
let totalPrice = km * pricePerKm;

console.log(totalPrice);

// Applica lo sconto per i minorenni e gli over 65
if (age < 18) {
  discount =  0.2; // Sconto del 20%
} else if (age >= 65) {
  discount = 0.4; // Sconto del 40%
}

let totalDiscount = totalPrice * discount;
console.log(totalDiscount);

let ticketPrice = totalPrice - totalDiscount;
console.log(ticketPrice);


// Mostra il prezzo finale
document.getElementById('demo').innerHTML = ("Il prezzo del tuo biglietto è di €" + totalPrice.toFixed(2));

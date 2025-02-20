//ESERCIZIO PIRAMIDE

//con for

// let piramide = "";
// for (let i = 0; i < 7; i++) {
//     piramide += "#";
//     console.log(piramide);
// }

//con while e lenght

// let startingString = "";
// while(startingString.length < 7){
//     startingString += "#";
//     console.log(startingString);
// }

//fatto con jan, con prompt

// let piramide = "";
// let altezza = parseInt(prompt("quanto righe vuoi nella piramide"));
// if(altezza > 0) {
//     for (let i = 0; i < altezza; i++) {
//         piramide += "#";
//         console.log(piramide);
//     }
//     console.log("sta piramide è alta " + altezza + " righe");
// }
// else{
//     alert("devi inserire un numero, e maggiore di 0 possibilmente, ignorante...");
// }

//NaN non puoi compararlo, pero c'è la funzione isNaN()

//ESERCIZIO FIZZBUZZ NORMALE

// for (let i = 1; i <= 100; i++) {
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log("FizzBuzz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz");
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }
// }

//ESERCIZIO FIZZBUZZ STRINGA

// for (let i = 1; i <= 100; i++) {
//     let string = '';
//     if(i % 3 === 0){
//         string += "Fizz";
//     }
//     if(i % 5 === 0){
//         string += "Buzz";
//     }
//     if(string === ""){
//         string += i;
//     }
//     console.log(string);
// }

//CROCE CODEWARS, ce la siamo sudata

// const max = parseInt(prompt("inserisci larghezza croce \(dispari e maggiore di 2\)"));

// if (max % 2 == 0) {
//     alert("non hai inserito un numero dispari");
// }
// else if (max < 3) {
//     alert("troppo piccolo!");
// }
// else if (isNaN(max)) {
//     alert("inserisci un numero... mongolo");
// }
// else {

//     for (let y = 0; y < max; y++) {
//         let rowString = ``;
//         for (let x = 0; x < max; x++) {
//             if (x === Math.floor(max / 2) && x === y) {
//                 rowString += "x";
//                 break;
//             }
//             else if (x === y || x + 1 === max - y) {
//                 rowString += "x";
//             }
//             else {
//                 rowString += " ";
//             }
//         }
//         console.log(rowString);
//     }
// }

//SCACCHIERA con max/2 senza Boolean con while(true) e prompt, PERO MAX/2 da problemi

// while (true) {
//     let max = parseInt(prompt("inserisci la larghezza della scacchiera!"));
//     let scacchiera = "";
//     if (isNaN(max)) {
//         alert("sei babbo");
//     } else {
//         for (let y = 0; y < max; y++) {
//             for (let x = 0; x < max / 2; x++) {
//                 if (y % 2 === 0) {
//                     scacchiera += "# ";
//                 }
//                 else {
//                     scacchiera += " #";
//                 }
//             }
//             scacchiera += "\n";
//         }
//         console.log(scacchiera);
//         break;
//     }
// }

//SCACCHIERA senza max/2 con Boolean

// let max = 8;
// let scacchiera = "";
// for (let y = 0; y < max; y++) {
//     let vf = true;
//     for (let x = 0; x < max; x++) {
//         if(y % 2 === 0){
//             if(vf){
//                 scacchiera += "#";
//                 vf = false;
//             }
//             else{
//                 scacchiera += " "
//                 vf = true;
//             }
//         }
//         else{
//             if(vf){
//                 scacchiera += " ";
//                 vf = false;
//             }
//             else{
//                 scacchiera += "#"
//                 vf = true;
//             }
//         }
//     }
//     scacchiera += "\n";
// }
// console.log(scacchiera);

//SCACCHIERA SOLUZIONE HUGO

// let size = 8;
// let stringResult = '';

// for (let row = 0; row < size; row++) {
//     let newRow = '';
//     for (let col = 0; col < size; col++) {
//         if (row % 2 === 0) {
//             if (col % 2 === 0) {
//                 newRow += ' ';
//             } else {
//                 newRow += '#';
//             }
//         } else {
//             if (col % 2 === 0) {
//                 newRow += '#';
//             } else {
//                 newRow += ' ';
//             }
//         }
//     }
//     stringResult += `${newRow}\n`
// }
// console.log(stringResult);

//SCACCHIERA SOLUZIONE SOMMA-POSIZIONE

// let size = 8;
// let stringResult = '';

// for (let row = 0; row < size; row++) {
//     let newRow = '';
//     for (let col = 0; col < size; col++) {

//         // nota bene gli spazi finiscono sempre nelle caselle la cui somma è pari, se dispari ci sono i #

//         if ((row + col) % 2 === 0) {
//             newRow += ' ';
//         } else {
//             newRow += '#';
//         }
//     }
//     stringResult += `${newRow}\n`
// }
// console.log(stringResult);

// ESERCIZI PER CASA

// ESERCIZIO 1
// usando un ciclo crea una piramide come quella del primo
// esercizio del libro utilizzando solo UN console.log

// let piramide = "";
// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < i+1; j++) {
//         piramide += "#";
//     }
//     piramide += "\n";
// }
// console.log(piramide);

// ESERCIZIO 2
// usando un ciclo crea una piramide come quella del primo
// esercizio del libro ma capovolta

// for (let i = 7; i > 0; i--) {
//     let piramide = "";
//     for (let j = 0; j < i; j++){
//         piramide += "#";
//     }
//     console.log(piramide);
// }

// for (let i = 1; i < 7; i++) {
//     console.log
// }

// ESERCIZIO 3
// usando un ciclo crea una piramide come quella dell'esempio:
//       #
//      ###
//     #####
//    #######
//   #########

// let numberRow = parseInt(prompt("quante righe vuoi?"));
// for (let i = 0; i < numberRow; i++) {
//     let stringRow = "";
//     for (let j = 0; j < numberRow-i-1; j++) { //stampa gli spazi necessari fino al centro
//         stringRow += " ";
//     }
//     for (let j = 0; j < i+1; j++) { //stampa # fino al centro
//         stringRow += "#";
//     }
//     for (let j = 0; j < i; j++) { //stampa # dopo il centro, formula: numberRow-(numberRow-i) --> semplificato, i
//         stringRow += "#";
//     }
//     console.log(stringRow)
// }

// soluzione co-pilot

// for (let i = 0; i < 5; i++) { // i represents the number of rows
//     let row = "";
//     for (let j = 0; j < 9; j++) { // j represents the total width of the row
//         if (j < 4 - i || j > 4 + i) {
//             row += " "; // add spaces before and after the center
//         } else {
//             row += "#"; // add hashes in the center
//         }
//     }
//     console.log(row);
// }



// ESERCIZIO 4
// usando un ciclo logga i numeri da 100 a -100

// for (let i = -100; i <= 100; i++) {
//     console.log(i);
// }

// ESERCIZIO 5
// usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7

// for (let i = 1; i <= 100; i++) {
//     if(i % 7 == 0){
//         console.log(i + "*");
//     }
//     else{
//         console.log(i);
//     }
// }

// ESERCIZIO 6
// usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti

// for (let i = 1; i <= 100; i++) {
//     let sqrtNum = Math.sqrt(i);
//     if(sqrtNum - Math.round(sqrtNum) == 0){
//         console.log(i + "*");
//     }
//     else{
//         console.log(i);
//     }
// }

// ESERCIZIO 7
// chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0

// let num = parseInt(prompt("inserisci numero \( positivo plz \)"));
// if(num>0){
//     for (let i = num; i >= 0; i--) {
//             console.log(i);
//     }
// }
// else{
//     alert("hai inserito male...");
// }

// ESERCIZIO 8
// chiedi all'utente un numero (qualsiasi) di partenza e poi logga tutti i numeri dal numero dato fino a 100

// let numMezzo = 100
// let num = parseInt(prompt("inserisci un qualsiasi numero"));
// if (isNaN(num)) {
//     alert("hai inserito male...");
// }
// else {
//     if (num >= numMezzo) {
//         for (let i = num; i >= numMezzo; i--) {
//             console.log(i);
//         }
//     }
//     else {
//         for (let i = num; i <= numMezzo; i++) {
//             console.log(i);
//         }
//     }
// }

// ESERCIZIO 9
// chiedi all'utente due numeri e logga tutti i numeri pari compresi tra i numeri forniti dall'utente

// let a = parseInt(prompt("inserisci primo numero"));
// let b = parseInt(prompt("inserisci secondo numero"));

// if (isNaN(a) || isNaN(b)) {
//     alert("hai inserito male...");
// }
// else {
//     if (a > b) {
//         console.log("inizio con " + b);
//         for (let i = b; i <= a; i++) {
//             if(i % 2 == 0){
//                 console.log(i);
//             }
//         }
//         console.log("finisco con " + a);
//     }
//     else {
//         console.log("inizio con " + a);
//         for (let i = a; i <= b; i++) {
//             if(i % 2 == 0){
//                 console.log(i);
//             }
//         }
//         console.log("finisco con " + b);
//     }
// }

// ESERCIZIO 10
// chiedi all'utente quanti anni ha e il suo genere e digli quante ore ha gia' vissuto e quante ore gli rimangono da vivere

//chiede e controlla se gli anni sono stati inseriti bene

// let age = 0;
// while (true) {
//     age = parseInt(prompt("quanti anni hai?"));
//     if (isNaN(age) || age <= 0) {
//         alert("hai inserito male...");
//     }
//     else {
//         break;
//     }
// }

// //chiede e controlla se il sesso è stato inserito bene
// let gender = ""
// while (true) {
//     gender = prompt("qual è il tuo sesso? \( rispondi con M o F \)");
//     if (gender === "M" || gender === "m" || gender === "F" || gender === "f") {
//         break;
//     }
//     else {
//         alert("hai inserito male...");
//     }
// }

// //setto in base al sesso l'età massima che può vivere
// let ageMax = 0;
// if (gender === "M" || gender === "m") {
//     ageMax = 71;
// }
// else {
//     ageMax = 76;
// }

// //stampo quante ore ha vissuto e quanto ore gli mancancano da vivere
// let yearsToLive = ageMax - age;
// let stringMain = "fino ad adesso hai vissuto per " + age*365*24 + " ore\n"
// if(yearsToLive <= 0){
//     stringMain += "e... dovresti essere morto o_o";
// }
// else{
//     stringMain += "e da vivere ti rimangono " + yearsToLive*365*24 + " ore!";
// }
// console.log(stringMain);
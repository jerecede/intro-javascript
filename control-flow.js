//le funzioni in js sempre restituiscono qualcosa, se non fanno niente ritornano cmq undefined

// console.log(console.log('ciao'));
// console.log(prompt('metti input'));

// const userName = prompt('come ti chiami?');
//prima fa il prompt e poi lo mette nella variabile
// console.log("ciao " + userName);

// alert("ciao " + userName);
//risponde con una finestra, non con console

//IF CONDIZIONE

// const userAgeString = prompt("how old are you?");
// const userAgeNumber = parseInt(userAgeString);

// if(parseInt(userAge) >= 18){ //parseInt perchè il prompt prende stringhe, anche se c'è la conversione forzata, parse è più corretto
//     console.log('benvenuto nel sito di incontri piccanti');
// }
// else{
//     console.log('va via!!!');
// }

// if(userAgeNumber >= 18 && userAgeNumber <= 80){
//     console.log('benvenuto nel sito di incontri piccanti');
// }else if(userAgeNumber < 18){
//     console.log('va via novellino!!!');
// }else{
//     console.log('il cuore potrebbe non reggere');
// }

//CICLO WHILE

// let i = 0;
// //iterator, variabile di controllo
// while (i < 11) {
//     console.log(i);
//     i++; // i = i + 1, zucchero sintattico
// }
// console.log("ho finito il ciclo while");

// let j = 0;
// while (j < 11) {
//     console.log(j);
//     j += 2; // j = j + 2
// }
// console.log("ho finito il ciclo while");

// let k = 10;
// while (k >= 0) {
//     console.log(k);
//     k -= 2;
//     //oppure k--
// }
// console.log("ho finito il ciclo while");

//calcola i quadrati da 0 a 10
// let q = 0;
// while (q <= 10) {
//     const square = q ** 2;
//     console.log(square);
//     q++;
// }
// console.log("ho finito il ciclo while");

//ciclo infinito
// const secretNumber = Math.round(Math.random() * 10) //Math.random da 0 a 1 float, bisogna arrotondare, 10 indica lo span numerico
// while(true){
//     const guessedString = prompt("indovina il numero che sto pensando (da 0 a 10)...");
//     const guessedNumber = parseInt(guessedString);
//     if (guessedNumber === secretNumber) {
//         alert("bravo, sei un campione!!!");
//         break; //esce dal ciclo
//     } else {
//         alert("schiappa!!!");
//     }
// }

//ciclo che usa una variabile che non è contatore come contatore, e la condizione cambia
// let startingString = '';
// while (startingString.length < 10) {
//     startingString = startingString + "*";
// }
// console.log(startingString);

//CICLO DO WHILE

// const pippo = 10;
// const pluto = 20;
// while (pippo > pluto) {
//     console.log("sono entrato nel while");
// }

// do {
//     console.log("sono entrato nel do while");
// } while (pippo > pluto);

//CICLO FOR

// for (let i = 0; i < 10; i++) {
//     console.log('sono nel ciclo for e sto facendo il giro ' + i);
// }

//ciclo infinito
// for (let i = 0; i < infinity ; i++) {   
// }
// let startingString2 = "";
// for (;;) {
//     startingString2 += "°";
//     if (startingString2.length === 10){
//         break;
//     }
// }
// console.log(startingString2);

//doppio ciclo
// for (let y = 0; y <= 3; y++) {
//     for (let x = 0; x <= 3; x++) {
//         console.log(`(x: ${x}, y: ${y})`);
//     }
// }
// for (let y = 3; y >= 0; y--) {
//     let row = '';
//     for (let x = 0; x <= 3; x++) {
//         row += `(x: ${x}, y: ${y})`;
//     }
//     console.log(row);
// }

// console.log("\n")

// for (let y = 0; y <= 3; y++) {
//     let row = '';
//     for (let x = 0; x <= 3; x++) {
//         row += `(x: ${x}, y: ${y})`;
//     }
//     console.log(row);
// }

//SWITCH

// const ageString = prompt("in che anno sei nato?");
// switch (ageString) {
//     case "2003":
//         alert("sei nato nel mio stesso anno!");
//         break;
//     case "1990":
//         alert("sei nato nell'anno dei mondiali");
//         break;
//     case "1984":
//         alert("sei nato nell'anno di Laura");
//         break;
//     default:
//         alert("che anno noioso!");
//         break;
// }
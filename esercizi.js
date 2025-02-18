//ESERCIZIO PIRAMIDE

// let piramide = "";
// for (let i = 0; i < 7; i++) {
//     piramide += "#";
//     console.log(piramide);
// }

// let startingString = "";
// while(startingString.length < 7){
//     startingString += "#";
//     console.log(startingString);
// }

//ESERCIZIO DA FARE
// let startingString = "";
// while(startingString.length < 7){
//     for (let i = 0; i <= startingString.length; i++) {
//         startingString += "#";
//     }
//     startingString += "\n";
    
// }
// console.log(startingString);

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

const max = parseInt(prompt("inserisci larghezza crocie \(dispari e maggiore di 2\)"));


if (max % 2 != 0) {
    alert("hai inserito un numero dispari");
}
else if (max < 3) {
    alert("troppo piccolo!");
}
else if (isNaN(max)) {
    alert("inserisci un numero... mongolo");
}
else {

    for (let y = 0; y < max; y++) {
        let rowString = ``;
        for (let x = 0; x < max; x++) {
            if (x === Math.floor(max / 2) && x === y) {
                rowString += "x";
                break;
            }
            else if (x === y || x + 1 === max - y) {
                rowString += "x";
            }
            else {
                rowString += " ";
            }
        }
        console.log(rowString);
    }
}

//SCACCHIERA con max/2 senza Boolean con while(true) e prompt

// while (true) {
//     let max = parseInt(prompt("inserisci la larghezza della scacchiera!"));
//     let scacchiera = "";
//     if (isNaN(max)) {
//         alert("sei babbo");
//     } else {
//         for (let y = 1; y < max + 1; y++) {
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
// for (let y = 1; y < max+1; y++) {
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
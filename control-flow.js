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

let i = 0;
//iterator, variabile di controllo
while (i < 11) {
    console.log(i);
    i++; // i = i + 1, zucchero sintattico
}
console.log("ho finito il ciclo while");

let j = 0;
while (j < 11) {
    console.log(j);
    j += 2; // j = j + 2
}
console.log("ho finito il ciclo while");

let k = 10;
while (k >= 0) {
    console.log(k);
    k -= 2;
    //oppure k--
}
console.log("ho finito il ciclo while");

//calcola i quadrati da 0 a 10
let q = 0;
while (q <= 10) {
    const square = i ** 2;
    console.log(square);
    q++;
}
console.log("ho finito il ciclo while");

//ciclo infinito
const secretNumber = Math.round(Math.random() * 10) //Math.random da 0 a 1 float, bisogna arrotondare
while(true){
    const guessedString = prompt("indovina il numero che sto pensando (da 0 a 10)...");
    const guessedNumber = parseInt(guessedString);
    if (guessedNumber === secretNumber) {
        alert("bravo, sei un campione!!!");
        break; //esce dal ciclo
    } else {
        alert("schiappa!!!");
    }
}

//CICLO DO WHILE

//CICLO FOR




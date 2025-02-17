//le funzioni in js sempre restituiscono qualcosa, se non fanno niente ritornano cmq undefined

// console.log(console.log('ciao'));
// console.log(prompt('metti input'));

// const userName = prompt('come ti chiami?');
//prima fa il prompt e poi lo mette nella variabile
// console.log("ciao " + userName);

// alert("ciao " + userName);
//risponde con una finestra, non con console

//IF

const userAgeString = prompt("quanti anni hai?");
const userAgeNumber = parseInt(userAgeString);

// if(parseInt(userAge) >= 18){ //parseInt perchè il prompt prende stringhe, anche se c'è la conversione forzata, parse è più corretto
//     console.log('benvenuto nel sito di incontri piccanti');
// }
// else{
//     console.log('va via!!!');
// }

if(userAgeNumber >= 18 && userAgeNumber <= 80){
    console.log('benvenuto nel sito di incontri piccanti');
}
else if(userAgeNumber < 18){
    console.log('va via novellino!!!');
}
else{
    console.log('il cuore potrebbe non reggere');
}
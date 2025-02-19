//tutte le funzioni su js ritornano qualcosa, senno undefined
//le funzioni return danno solo e un solo risultato

//COME DEFINIRE FUNZIONI

const gridaSchiappa = function () {
    console.log("SCHIAPPAAA!!!!");
}

function gridaSchiappa2(name) {
    console.log(name + " SCHIAPPAAA!!!!");
}

// const gridaSchiappa2 = function (name) {
//     console.log(name + " SCHIAPPAAA!!!!");
// }

console.log(typeof gridaSchiappa); //tipo function
console.log(typeof gridaSchiappa2);

gridaSchiappa();
gridaSchiappa2('pippo');
gridaSchiappa2('ciao');
gridaSchiappa2(2);
gridaSchiappa2(true);

//arrow function, differenze quando ci sono oggetti
const logDouble = (number) => console.log(number * 2);

logDouble(40);

//funzioni pure, ritorna, funzioni impure, void (come quelle di prima)
function sum(number1, number2){

    //metto valori di "default"

    if (!number1){ //undefined è un false
        number1 = 0;
    }
    if (!number2){
        number2 = 0;
    }
    const sum = number1 + number2;
    return sum;
}

const sumArrow = (number1 , number2) => number1 + number2; // la freccia => funziona da ritornante
// const sumArrow = (number1 = 0, number2 = 0) => number1 + number2; //metto valori di default

const sumArrow2 = (number1, number2) => { //se usi graffe devi esplicitare return
    const sum = number1 + number2;
    return sum;
}

console.log(sum(10,8));
console.log(sumArrow(10,8));
console.log(sumArrow2(10,8));

const result = sum(20, 12);
console.log(result);

//le funzion in js sono tollerabili
const result2 = sum(20, 12, 40, 100);
console.log(result2);
const result3 = sum(20); //mette undefined al secondo param
console.log(result3); //num + undefined = NaN
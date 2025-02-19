//tutte le funzioni su js ritornano qualcosa, senno undefined
//le funzioni return danno solo e un solo risultato

//FUNZIONI

// const gridaSchiappa = function () {
//     console.log("SCHIAPPAAA!!!!");
// }

// function gridaSchiappa2(name) {
//     console.log(name + " SCHIAPPAAA!!!!");
// }

// // const gridaSchiappa2 = function (name) {
// //     console.log(name + " SCHIAPPAAA!!!!");
// // }

// console.log(typeof gridaSchiappa); //tipo function
// console.log(typeof gridaSchiappa2);

// gridaSchiappa();
// gridaSchiappa2('pippo');
// gridaSchiappa2('ciao');
// gridaSchiappa2(2);
// gridaSchiappa2(true);

// //arrow function, differenze quando ci sono oggetti
// const logDouble = (number) => console.log(number * 2);

// logDouble(40);

// //funzioni pure, ritorna, funzioni impure, void (come quelle di prima)
// function sum(number1, number2){

//     //metto valori di "default"

//     if (!number1){ //undefined è un false
//         number1 = 0;
//     }
//     if (!number2){
//         number2 = 0;
//     }
//     const sum = number1 + number2;
//     return sum;
// }

// const sumArrow = (number1 , number2) => number1 + number2; // la freccia => funziona da ritornante
// // const sumArrow = (number1 = 0, number2 = 0) => number1 + number2; //metto valori di default

// const sumArrow2 = (number1, number2) => { //se usi graffe devi esplicitare return
//     const sum = number1 + number2;
//     return sum;
// }

// console.log(sum(10,8));
// console.log(sumArrow(10,8));
// console.log(sumArrow2(10,8));

// const result = sum(20, 12);
// console.log(result);

// //le funzion in js sono tollerabili
// const result2 = sum(20, 12, 40, 100);
// console.log(result2);
// const result3 = sum(20); //mette undefined al secondo param
// console.log(result3); //num + undefined = NaN

//SCOPES
//lo spazio di schermo/file compreso tra due graffe, funzioni sono scopes, ma anche gli if, for ecc.

// const hello = 'ciao'; //dalla linea 71 esiste, appartiene allo scope globale

// function sayHelloTo(name){

//     function createHelloString(name){
//         const helloString = hello + ' ' + name + '!';
//         return helloString;
//     }

//     const newHello = createHelloString(name);
//     console.log(newHello);

//     // const helloString = hello + ' ' + name + '!'; //scope più piccolo, figlio, può leggere il suo scope madre, scope globale, il file
//     // console.log(helloString);
//     //helloString inizia la sua vita e finisce la sua vita qui, invece nel file tutti continuano a esistere
// }

// sayHelloTo("Jere");
// console.log(hello);
// // console.log(helloString); //la mamma scope non può accedere al figlio scope, infati da error
// // create HelloString('Laura'); //non posso chiamarlo xk appartiene a scope inaccessibile

// //se richiami una stessa variabile dichiarata in due scope diversi, sceiglierà quello più vicino, shadowing

// //CLOJURE

// //una funziona che crea una funione e la restituisce
// function createCallTwice(name) {
//     const call = name + ',' + name + '!';

//     const callFunction = () => console.log(call); //non la chiamo perchè la sto solo creando
//     // function callFunction(){ //stessa cosa
//     //     console.log(call)
//     // };

//     return callFunction;
// }

// const callTwice = createCallTwice('jere'); //const callTwice diventa function
// callTwice();
// //in teoria la var name non dovrebbe esistere, pero esiste, clojure, le variabili genitori esistono

// function createMultiplicator(number){
//     const multiplicatorFunction = function (numberToMultiply) {
//         return numberToMultiply * number;
//     }
//     return multiplicatorFunction
// }

// const multiplicatorX2 = createMultiplicator(2);
// const multiplicatorX2bis = function (numberToMultiply) { //potevo creare direttamente la funzione
//     return numberToMultiply * 2;
// }

// const multiplicatorX3 = createMultiplicator(3);
// const multiplicatorX3bis = function (numberToMultiply) {
//     return numberToMultiply * 3;
// }

// console.log(multiplicatorX2(10));
// console.log(multiplicatorX2(13));

// console.log(multiplicatorX3(10));
// console.log(multiplicatorX3(13));

// function createCounter(){
//     let counter = 0;

//     const  incrementFunction = function () {
//         counter++;
//         return counter
//     }

//     return incrementFunction;
// }

// const increment = createCounter();

// console.log(increment()); //apprifitta la clojure
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

//RICORSIONE RECURSION
//si usa per esempio pr calcolare il fattoriale

function fact(number) {
    if(number === 0){
        return 1; //con return finisce funzione, non puo ritornare più di due valori
    }
    return number * fact(number - 1);
}

console.log(fact(5));
// console.log(fact(60000)); //problemi con memoria, bisogna ottimizzare
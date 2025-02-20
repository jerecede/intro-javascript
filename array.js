// //ARRAY DICHIARAZIONE

// const pippo = 12;
// const array0 = []; //scatola vuota
// const array1 = ['ciao', 23, 23.12, true, [], ['mondo'], pippo]; //puo contenere qualsiasi cosa, non tipizzato, non raccomandabile, piipo non è più pippo

// console.log(array1); //si vede graficamente tutto l'array, componenti e length

// const array2 = [];

// //PUSH E POP

// array2.push(4); //lo aggiunge alla fine
// array2.push(8);

// console.log('array2 push',array2);

// const removed = array2.pop(); //rimuove l'ultimo, e lo returna

// console.log('array2 pop', array2, removed);

// //UNSHIFT E SHIFT

// array2.unshift(12); //lo aggiunge all'inizio
// array2.unshift(11);

// console.log('array2 unshift', array2);

// const removed2 = array2.shift(); //rimuove il primo, e lo returna

// console.log('array2 shift', array2, removed2);

// //ELEMENTI

// console.log('get array second element', array2[1]);

// array2[1] = 27;

// console.log('get array second element after edit', array2[1]);

//ARRAY E FOR

// const array3 = [123, 12 , 45, 34, 1, 2, 45, 34];

// for (let i = 0; i < array3.length; i++) {
//     const element = array3[i];
//     console.log(`l'elemento a indice ${i} è ${element}`);
// }

// //non posso ricavare indice
// for (const element of array3) {
//     console.log(element);
// }

// //FUNZIONI BASE ARRAY

// const array4 = [1000, 1001];
// const array5 = array3.concat(array4) //concatena due array
// console.log('concat array3 e array4',array5);

// const array6 = array5.slice(2, 5); //copia un pezzo di un array (start,end)
// // const array6 = array5.slice(2, -2); //stessa cosa
// // const array6 = array5.slice(2, array5.length - 2); //stessa cosa
// console.log('slice ricavato da array5',array6);

// const array7 = array5.splice(1, 3) //taglia un pezzo di un array (start,end)
// console.log('splice a array5', array5);
// console.log('splice ricavato', array7);

// array5.sort(); //non returna, solo ordina
// console.log('sort', array5); //prossima lezione si spiega meglio sort

// const index = array5.indexOf(1000); //do un vlore per sapere il suo index, secondo param è from
// console.log('1000 è a indice', index);

//3 PATTERN
//mapping: applicare un'operazione a tutti gli elementi degli array
//filtering: prendo array in ingresso e tengo alcuni elementi, find quando voglio trovare solo uno (mapping + reduce)
//reducing: fare somma o operazioni tra elementi, per ricavare altre informazioni
//si usa sempre il for in questi pattern

// const arrayP = [2, 4, 1, 33, 56, 78, 12, 5, 6, 7, 4]

// //MAPPING

// function doubleArrayElements(arrayOfNumbers) {

//     const newArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
        
//         const element = arrayOfNumbers[i];
//         const double = element * 2; //nel mapping c'è solo un'operazione

//         newArray.push(double);
//     }

//     return newArray;
// }

// const arrayP2 = doubleArrayElements(arrayP);
// console.log('arrayP', arrayP);
// console.log('arrayP2 double', arrayP2);

// function addOneToArrayElements(arrayOfNumbers) {

//     const newArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {

//         const element = arrayOfNumbers[i];
//         const operation = element + 1; //cambia solo l'operazione nei mapping

//         newArray.push(operation);
//     }

//     return newArray;
// }

// const arrayP3 = addOneToArrayElements(arrayP2);
// console.log('arrayP3 plus-one', arrayP3);

// //FILTERING
// //se c'è condizione di rimozione, devo tenermi gli elementi che non sono nella condizione, applico condizione inversa

// function removeLargerThan30(arrayOfNumbers) {

//     const newArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {

//         const element = arrayOfNumbers[i];

//         if(element <= 30){
//             newArray.push(element); //nei filtering c'è solo condizione
//         }
//     }

//     return newArray;
// }

// const arrayP4 = removeLargerThan30(arrayP);
// console.log('arrayP4 filter', arrayP4);

// function keepEvenElements(arrayOfNumbers) {

//     const newArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {

//         const element = arrayOfNumbers[i];

//         if(element % 2 === 0){
//             newArray.push(element); //nei filtering c'è solo condizione
//         }
//     }

//     return newArray;
// }

// //REDUCING
// //mapping non riduce mai il num elem, return array
// //filtering cambia eventualemente il num elem, return array
// //reducing restituisce quello che vuole, non per forza return array, il return tipo può cambiare dipendendo dalla situa

// function sumAllElements(arrayOfNumbers){
    
//     let accumulator = 0; //elemento neutro somma

//     for (let i = 0; i < arrayOfNumbers.length; i++) {

//         const element = arrayOfNumbers[i];

//         accumulator += element;
//     }

//     return accumulator;
// }

// const arrayP5 = sumAllElements(arrayP);
// console.log('reduce, sum', arrayP5);

// function multiplyAllElements(arrayOfNumbers){
    
//     let accumulator = 1; //elemento neutro moltiplicazione

//     for (let i = 0; i < arrayOfNumbers.length; i++) {

//         const element = arrayOfNumbers[i];

//         accumulator *= element;
//     }

//     return accumulator;
// }

// const arrayP6 = multiplyAllElements(arrayP);
// console.log('reduce, multiply', arrayP6);

// function sumAllOddElements(arrayOfNumbers){
    
//     let accumulator = 0;

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
        
//         const element = arrayOfNumbers[i];
        
//         if(element % 2 !== 0){
//             accumulator += element;
//         }
//     }

//     return accumulator;
// }

// const arrayP7 = sumAllOddElements(arrayP); //più performante (fa solo un ciclo)
// console.log('reduce, sum-odd', arrayP7);

// //REDUCE function che concatena functions
// function sumAllEvenElements(arrayOfNumbers){
//     return sumAllElements(keepEvenElements(arrayOfNumbers));
// }

// const arrayP8 = sumAllEvenElements(arrayP); //meno performante (fa tanti cicli) ma più funzionante
// console.log('reduce, sum-odd', arrayP8);

// //REDUCE con 2 RETURN

// //versione da migliorare
// function sumEvenAndsumOdd(arrayOfNumbers){
//     let accumulatorEven = 0;
//     let accumulatorOdd = 0;

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
        
//         if(element % 2 === 0){
//             accumulatorEven += element;
//         } else {
//             accumulatorOdd += element;
//         }
//     }

//     return [accumulatorEven, accumulatorOdd];
// }

// const arrayP9 = sumEvenAndsumOdd2(arrayP); //meno performante (fa tanti cicli) ma più funzionante
// console.log('reduce, sum-even-odd', arrayP9);

// //versione migliorata
function sumEvenAndsumOdd2(arrayOfNumbers){
    let accumulator = [0, 0]; //sumOfEven, sumOfOdd

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        
        if(element % 2 === 0){
            accumulator[0] += element;
        } else {
            accumulator[1] += element;
        }
    }

    return accumulator;
}

// const arrayP10 = sumEvenAndsumOdd2(arrayP);
// console.log('reduce, sum-even-odd 2', arrayP10);

//MANAGEMENT MEMORIA; LIFO, STACK(valori) e HEAP(array)

let number1 = 27;

function stupidFunction(number) {
    number = number * 2;
}

//la funzione fa una copia del valore, e modifica la copia non il valore originale

stupidFunction(number1);
console.log(number1);

let array1 = [27];

function stupidFunction2(array) {
    array[0] = array[0] * 2;
}

//la funzione fa la copia dell'address dell'array, e modfica direttamente l'array

stupidFunction2(array1);
console.log(array1);

//per non modificare direttamente l'array

function lessStupidFunction(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        newArray.push(element);
    }

    newArray[0] = newArray[0] * 2;

    return newArray
}

let array2 = [30];
lessStupidFunction(array2);
console.log(array2);

//questa volta array rimane invariato
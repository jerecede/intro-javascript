const array1 = [23 , 14, 56, 44, 3, 0, -1, 55, -12, 60, 8]

function genericMap(array, mappingFunction) { //array anche di non numeri, e una funzione come parametro
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = mappingFunction(element, i, array);
        newArray.push(newElement);
    }

    return newArray;
}

function genericFilter(array, filteringFunction) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (filteringFunction(element, i, array)) {
            newArray.push(element);
        }
    }

    return newArray;
}

function genericReduce(array, reducingFunction, startingAccumulator){
    let accumulator = startingAccumulator;

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        accumulator = reducingFunction(accumulator, current, i, array);
    }

    return accumulator;
}

// ESERCIZIO 1 (FILTER)
// filtrare tutti i numeri minori o uguali a zero

const keepBiggerThanZero = value => value > 0;
const genericNumbersBiggerThanZero = genericFilter(array1, keepBiggerThanZero);

const numbersBiggerThanZero = array1.filter(value => value > 0)

// console.log(numbersBiggerThanZero);

 
// ESERCIZIO 2 (MAP)
// convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius

const celToFahFntc = value => (value * (9/5)) + 32;
const genericFahDegrees = genericMap(array1, celToFahFntc);

const fahDegrees = array1.map(value => (value * (9/5)) + 32);

// console.log(fahDegrees);

// ESERCIZIO 3 (REDUCE)
// fare la media dei valori

const meanFnct = (acc,curr,_,array) => (acc + (curr/array.length));
const genericMeanResult = genericReduce(array1, meanFnct, 0);

const meanResult = array1.reduce((acc,curr,_,array) => (acc + (curr/array.length)), 0)

// console.log(meanResult);

// ESERCIZIO 4 (REDUCE)
// restituire il valore più basso e il più alto

const maxMinFnct = (acc,curr) => ;
const genericMaxMin = genericReduce(array1, maxMinFnct, [infinity, -infinity]);

const maxMin = array1.reduce(maxMinFnct, [infinity, -infinity])

const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

// ESERCIZIO 5 (FILTER)
// filtrare tutti i nomi piu grandi di 4 caratteri

// ESERCIZIO 6 (MAP)
// traformare tutte le stringe in maiuscolo

// ESERCIZIO 7 (MAP)
// mettere SOLO le iniziali maiuscole

// ESERCIZIO 8 (REDUCE)
// restituire una stringa composta dalle iniziali delle parole

// ESERCIZIO 9 (REDUCE)
// sommare tutti i caratteri di tutte le stringhe

// ESERCIZIO 10 (MAP)
// eliminare le vocali dalle stringhe

// ESERCIZIO 11 (MAP)
// restituire un array di numeri che sono le lunghezze delle singole parole

const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

//ESERCIZIO 12 (MAP)
//restituire un array di numeri che sono le lunghezze dei sigoli array

//ESERCIZIO 13 (REDUCE)
//sommare tutti i numeri in tutti gli array

//ESERCIZIO 14 (REDUCE)
//sommare tutte le lunghezze degli array
//devo scommentare la funzione dell'esercizio 12

//ESERCIZIO 15 (REDUCE)
//sommare tutti i numeri con indice uguale e restituire un array di risultati, ho usato tre funzioni x_x
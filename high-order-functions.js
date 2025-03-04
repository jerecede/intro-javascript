const testArray = [2, 5, 7, 1, 0, 100, 103];

const testArray2 = ['pippo', 'pluto', 'paperino', 'clarabella', 'minnie'];

function add2ToArray(arrayNumbers) {
    let newArray = [];

    for (let i = 0; i < arrayNumbers.length; i++) {
        const number = arrayNumbers[i];
        const newNumber = number + 2;
        newArray.push(newNumber);
    }

    return newArray;
}

const arrayp = add2ToArray(testArray);
console.log(arrayp);

function addIndexToArray(arrayNumbers) {
    let newArray = [];

    for (let i = 0; i < arrayNumbers.length; i++) {
        const number = arrayNumbers[i];
        const newNumber = number + i;
        newArray.push(newNumber);
    }

    return newArray;
}

const arrayp2 = addIndexToArray(testArray);
console.log(arrayp2);

//facciamo
//FUNZIONE MAP

function map(array, mappingFunction) { //array anche di non numeri, e una funzione come parametro
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = mappingFunction(element, i, array); //massimo parametri
        newArray.push(newElement);
    }

    return newArray;
}

function add2(number) {
    const newNumber = number + 2;
    return newNumber;
}

function addIndex(number, index) {
    const newNumber = number + index;
    return newNumber;
}

// const arrayp3 = map(testArray, add2);
const arrayp3 = testArray.map(add2);
console.log('MAP add2\n', arrayp3);

// const arrayp4 = map(testArray, addIndex);
const arrayp4 = testArray.map(addIndex);
console.log('MAP addIndex\n', arrayp4);

function toUpperCase(str) {
    const newStr = str.toUpperCase();
    return newStr;
}

// const arrayp5 = map(testArray2, toUpperCase);
const arrayp5 = testArray2.map(toUpperCase);
console.log('MAP toUpperCase\n', arrayp5);

//scriverlo in una solo linea
const arrayp6 = testArray.map(number => number + 3); //const add3 = number => number + 3, invece faccio funzione anonima, diretto
console.log('MAP .reduce add3\n', arrayp6);

const arrayp7 = testArray.map((number, index) => number - (index * 2)); //con due parametri si usano ()
console.log('MAP .reduce addIndex\n', arrayp7);

const arrayp8 = testArray2.map(str => str.length); //restituiscd array con le lunghezze di ogni stringa
console.log(arrayp8);

const arrayp9 = testArray2.map(str => str + "banana"); // => si chiama fat-arrow
console.log(arrayp9);

//FUNZIONE FILTER

function keepEven(arrayNumbers) {
    let newArray = [];

    for (let i = 0; i < arrayNumbers.length; i++) {
        const num = arrayNumbers[i];

        if (num % 2 === 0) {
            newArray.push(num);
        }
    }

    return newArray;
}

const arrayp10 = keepEven(testArray);
console.log(arrayp10);

function filter(array, filteringFunction) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (filteringFunction(element, i, array)) { //massimo parametri
            newArray.push(element);
        }
    }

    return newArray;
}

function isEven(numb) {
    if (numb % 2 === 0) { return true }
    else { return false }
}

// const arrayp11 = filter(testArray, isEven);
const arrayp11 = testArray.filter(isEven);
console.log(arrayp11);

const arrayp12 = testArray.filter(num => num < 5);
console.log(arrayp12);

const arrayp13 = testArray2.filter(str => str.length > 6);
console.log(arrayp13);

// const arrayp14 = testArray2.filter((str, index) => index % 2 !== 0);
const arrayp14 = testArray2.filter((_, index) => index % 2 !== 0); //anche se uso solo index devo mettere i due parametri, uso underscore
console.log(arrayp14);

//FUNZIONE REDUCE

function sumAll(arrayNumbers){
    let accumulator = 0; //puo essere array, stringa, number

    for (let i = 0; i < arrayNumbers.length; i++) {
        const num = arrayNumbers[i];

        accumulator = accumulator + num;
    }

    return accumulator;
}

const arrayp15 = sumAll(testArray);
console.log(arrayp15);

function reduce(array, reducingFunction, startingAccumulator){
    let accumulator = startingAccumulator;

    for (let i = 0; i < array.length; i++) {
        const current = array[i];

        accumulator = reducingFunction(accumulator, current, i, array); //massimo parametri
    }

    return accumulator;
}

function sum(accumulator, current){
    const newAccumulator = accumulator + current;
    return newAccumulator;
}

const arrayp16 = reduce(testArray, sum, 0);
console.log(arrayp16);

// const arrayp17 = testArray.reduce(sum, 0);
const arrayp17 = testArray.reduce((accumulator, current) => accumulator + current, 0);
console.log(arrayp17);

const arrayp18 = testArray2.reduce((a, c) => a + c, ""); // a = accumulator, c = current
console.log(arrayp18);

const arrayp19 = testArray.reduce((a, c) => a * c, 1);
console.log(arrayp19);

//FUNZIONE FIND (kinda filter)

function isEven2(numb) {
    return numb % 2 === 0;
}

console.log(testArray.filter(isEven)); //return tutti i pari
console.log(testArray.find(isEven)); //return il primo pari che trova

//FUNZIONE SOME

console.log(testArray.some(isEven)); //return boolean, c'è uno pari? findsome

//FUNZIONE EVERY

console.log(testArray.every(isEven)); //return boolean, sono tutti pari? findevery

//FUNZIONE SORT, prende come base l'ascii per ordinare

testArray.sort()
console.log(testArray);

function sortingFunctionAsc(first, second){
    if (first < second) {
        return 1;
    } else if (first > second) {
        return -1
    } else {
        return 0;
    }
}

function sortingFunctionDesc(first, second){
    if (first > second) {
        return 1;
    } else if (first < second) {
        return -1
    } else {
        return 0;
    }
}

testArray.sort(sortingFunctionDesc)
console.log(testArray);
testArray.sort(sortingFunctionAsc)
console.log(testArray);

testArray.sort((f, s) => f - s); //crescente numeri
console.log(testArray);
testArray.sort((f, s) => s - f); //decrescente numeri
console.log(testArray);

//localeCompare vede com'è l'ordinamento alfabetico del luogo
testArray2.sort((fStr, sStr) => fStr.localeCompare(sStr)); // A - Z
console.log(testArray2);
testArray2.sort((fStr, sStr) => sStr.localeCompare(fStr)); // Z - A
console.log(testArray2);

function betterSorter(array, sortingFunction){ //ordinare l'array in un altro array, senza modificare l'originale
    const newArray = [...array];
    newArray.sort(sortingFunction)
    return newArray;
}

const arrayp20 = betterSorter(testArray2, (fStr, sStr) => fStr.localeCompare(sStr));
console.log(testArray2);
console.log(arrayp20);
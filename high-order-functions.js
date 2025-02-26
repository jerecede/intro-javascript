const testArray = [2, 5, 7, 1, 0, 100, 103];

const testArray2 = ['pippo', 'pluto', 'paperino', 'clarabella', 'minnie'];

function add2ToArray(arrayNumbers){
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

function addIndexToArray(arrayNumbers){
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

function map(array, mappingFunction){ //array anche di non numeri, e una funzione come parametro
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const newElement = mappingFunction(element, i, array);
        newArray.push(newElement);
    }

    return newArray;
}

function add2(number){
    const newNumber = number + 2;
    return newNumber;
}

function addIndex(number, index){
    const newNumber = number + index;
    return newNumber;
}

// const arrayp3 = map(testArray, add2);
const arrayp3 = testArray.map(add2);
console.log(arrayp3);

// const arrayp4 = map(testArray, addIndex);
const arrayp4 = testArray.map(addIndex);
console.log(arrayp4);

function toUpperCase(str){
    const newStr = str.toUpperCase();
    return newStr;
}

// const arrayp5 = map(testArray2, toUpperCase);
const arrayp5 = testArray2.map(toUpperCase);
console.log(arrayp5);

//scriverlo in una solo linea
const arrayp6 = testArray.map(number => number + 3); //const add3 = number => number + 3, invece faccio funzione anonima, diretto
console.log(arrayp6);

const arrayp7 = testArray.map((number,index) => number - (index*2)); //con due parametri si usano ()
console.log(arrayp7);

const arrayp8 = testArray2.map(str => str.length); //restituiscd array con le lunghezze di ogni stringa
console.log(arrayp8);

const arrayp9 = testArray2.map(str => str + "banana"); // => si chiama fat-arrow
console.log(arrayp9);

//FUNZIONE FILTER

function keepEven(arrayNumbers) {
    let newArray = [];

    for (let i = 0; i < arrayNumbers.length; i++) {
        const num = arrayNumbers[i];

        if(num % 2 === 0){
            newArray.push(num);
        }        
    }

    return newArray;
}

const arrayp10 = keepEven(testArray);
console.log(arrayp10);

function filter(array, filteringFunction){
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(filteringFunction(element, i, array)){
            newArray.push(element);
        }        
    }

    return newArray;
}

function isEven(numb){
    if(numb % 2 === 0) {return true}
    else {return false}
}

// const arrayp11 = filter(testArray, isEven);
const arrayp11 = testArray.filter(isEven);
console.log(arrayp11);

const arrayp12 = testArray.filter(num => num < 5);
console.log(arrayp12);
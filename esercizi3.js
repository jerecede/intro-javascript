const array1 = [23 , 14, 56, 44, 3, 0, -1, 55, -12, 60, 8]

// ESERCIZIO 1
// filtrare tutti i numeri minori o uguali a zero

// function keepNegativeOrZeroNumbers(array) {
//     const newArray  = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (element <= 0) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }
//  const arrayP = keepNegativeOrZeroNumbers(array1);
//  console.log(arrayP);
 
// ESERCIZIO 2
// convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius

// function convertCelToFahr(array) {
//     const newArray = []
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         let elementConverted = (element * (9/5)) + 32;
//         newArray.push(elementConverted);
//     }
    
//     return newArray;

// }
// const arrayP = convertCelToFahr(array1);
// console.log(arrayP);

// ESERCIZIO 3
// fare la media dei valori

// function mediaArray(array) {

//     let somma = 0;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         somma = somma + element;

//     }
//     const media = somma / array.length;
//     return media;

// }
// const arrayP = mediaArray(array1);
// console.log(arrayP);

// ESERCIZIO 4
// restituire il valore più basso e il più alto

// function findMaxMinArray(array) {

//     let maxAndMin = [0, 0];
//     let maxElement = -Infinity;
//     let minElement = Infinity;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element > maxElement) {
//             maxElement = element;
//         }
//         if (element < minElement) {
//             minElement = element;
//         }
        
        

//     }
//     maxAndMin[0] = maxElement;
//     maxAndMin[1] = minElement
//     return maxAndMin;
// }
// const arrayP = findMaxMinArray(array1);
// console.log(arrayP);

const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

// ESERCIZIO 5
// filtrare tutti i nomi piu grandi di 4 caratteri

// function stringLargerOf4(array) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element.length > 4) {
//             newArray.push(element)
//         }
//     }
//     return newArray;
// }
// const arrayP = stringLargerOf4(array2);
// console.log(arrayP);


// ESERCIZIO 6
// traformare tutte le stringe in maiuscolo

// function stringUpperCase(array) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//             let stringUpperCase = element.toUpperCase()
//             newArray.push(stringUpperCase);
//     }
//     return newArray;
// }
// const arrayP = stringUpperCase(array2);
// console.log(arrayP);

// ESERCIZIO 7
// mettere SOLO le iniziali maiuscole

// function stringFirstUpperCase(array) {
//     const newArray = []
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let stringUpperCase = element.charAt(0).toUpperCase() + element.slice(1);
//         newArray.push(stringUpperCase)
//     }
    
//     return newArray;

// }
// const arrayP = stringFirstUpperCase(array2);
// console.log(arrayP);

// ESERCIZIO 8
// restiture una stringa composta dalle iniziali delle parole

// function arrayFirstLetter(array) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let stringUpperCase = element.charAt(0);
//         newArray.push(stringUpperCase);
//     }

//     return newArray;

// }
// const arrayP = arrayFirstLetter(array2);
// console.log(array2);
// console.log(arrayP);

//ESERCIZIO 9
// contare tutti i caratteri di tutte le stringhe

// function countCharArray(array) {
//     let counterChar = 0;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         counterChar = counterChar + element.length;

//     }

//     return counterChar;
// }
// const arrayP = countCharArray(array2);
// console.log(array2);
// console.log(arrayP);

//10) eliminare le vocali dalle stringhe

// function removeAllVocals(array) {
//     let newArray = [];
//     for (i = 0; i < array.length; i++) {
//         let stringElement = array[i];

//         for (let j = 0; j < stringElement.length; j++) {

//             stringElement = stringElement.replace(/[aeiou]/gi, ""); //gi = global, case insensitive

//             // let charElement = stringElement[j];
            
//             // if (charElement === "a" || charElement === "A" || charElement === "e" || charElement === "E" || charElement === "i" || charElement === "I" || charElement === "o" || charElement === "O" || charElement === "u" || charElement === "U") {
//             //     if (j === 0) {
//             //         stringElement = stringElement.substring(1, stringElement.length);
//             //         j--;
//             //     } else if (j === stringElement.length - 1) {
//             //         stringElement = stringElement.substring(0, stringElement.length - 1);
//             //         j--;
//             //     }
//             //     else {
//             //     }
//             // }
//         }
//         newArray.push(stringElement);
//     }
//     return newArray;
// }

// const arrayP = removeAllVocals(array2);
// console.log(array2);
// console.log(arrayP);

//ESERCIZIO 11
//restituire un array di numeri che sono le lunghezze delle singole parole

// function getSizeStringsOfArray(array) {
//     let newArray = [];
//     for (i = 0; i < array.length; i++) {
//         let stringElement = array[i];
//         let sizeStringElement = stringElement.length;
//         newArray.push(sizeStringElement);
//     }
//     return newArray;
// }

// const arrayP = getSizeStringsOfArray(array2);
// console.log(array2);
// console.log(arrayP);


const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

//ESERCIZIO 12
//restituire un array di numeri che sono le lunghezze dei sigoli array

function getSizeArraysOfArray(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        let arrayElement = array[i];
        let sizeArrayElement = arrayElement.length;
        newArray.push(sizeArrayElement);
    }
    return newArray;
}

// const arrayP = getSizeArraysOfArray(array3);
// console.log(array3);
// console.log(arrayP);

//ESERCIZIO 13
//sommare tutti i numeri in tutti gli array

// function sumAllNumbersOfArrays(array) {
//     let somma = 0;
//     for (i = 0; i < array.length; i++) {
//         const arrayElement = array[i];

//         for (let j = 0; j < arrayElement.length; j++) {
//             somma += arrayElement[j];
//         }
//     }
//     return somma;
// }

// const arrayP = sumAllNumbersOfArrays(array3);
// console.log(array3);
// console.log(arrayP);

//ESERCIZIO 14
//sommare tutte le lunghezze degli array
//devo scommentare la funzione dell'esercizio 12

// function sumAllSizesOfArrays(array) {
//     let somma = 0;
//     const newArray = getSizeArraysOfArray(array);
//     for (let i = 0; i < newArray.length; i++) {
//         const element = newArray[i];
//         somma += element;
//     }

//     return somma;
// }

// const arrayP = sumAllSizesOfArrays(array3);
// console.log(array3);
// console.log(arrayP);
    

//ESERCIZIO 15
//sommare tutti i numeri con indice uguale e restituire un array di risultati, ho usato tre funzioni x_x

// function getMaxLengthArray(array) {
//     let maxLength = -Infinity;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if(element.length > maxLength){
//             maxLength = element.length
//         }
//     }
//     return maxLength;
// }

// function createArrayEmpty(size){
//     let newArray = [];

//     for (let i = 0; i < size; i++) {
//         newArray.push(0);
//     }

//     return newArray;
// }

// function sumForEachIndexOfArray(array) {
//     let newArray = createArrayEmpty(getMaxLengthArray(array));

//     for (let i = 0; i < array.length; i++) {
//         const elementArray = array[i];

//         for (let j = 0; j < elementArray.length; j++) {
//             const element = elementArray[j];
//             newArray[j] = newArray[j] + element;
//         }
//     }

//     return newArray;
// }

// const arrayP = sumForEachIndexOfArray(array3);
// console.log(array3);
// console.log(arrayP);
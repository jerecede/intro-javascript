// const array1 = [23 , 14, 56, 44, 3, 0, -1, 55, -12, 60, 8]

// function genericMap(array, mappingFunction) { //array anche di non numeri, e una funzione come parametro
//     let newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const newElement = mappingFunction(element, i, array);
//         newArray.push(newElement);
//     }

//     return newArray;
// }

// function genericFilter(array, filteringFunction) {
//     let newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (filteringFunction(element, i, array)) {
//             newArray.push(element);
//         }
//     }

//     return newArray;
// }

// function genericReduce(array, reducingFunction, startingAccumulator){
//     let accumulator = startingAccumulator;

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];

//         accumulator = reducingFunction(accumulator, current, i, array);
//     }

//     return accumulator;
// }

// // ESERCIZIO 1 (FILTER)
// // filtrare tutti i numeri minori o uguali a zero

// // const keepBiggerThanZero = curr => curr > 0;
// // const arrayp = genericFilter(array1, keepBiggerThanZero);

// const arrayp = array1.filter(curr => curr > 0)

// console.log(arrayp);
 
// // ESERCIZIO 2 (MAP)
// // convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius

// // const celToFahFntc = curr => (curr * (9/5)) + 32;
// // const arrayp2 = genericMap(array1, celToFahFntc);

// const arrayp2 = array1.map(curr => (curr * (9/5)) + 32);

// console.log(arrayp2);

// // ESERCIZIO 3 (REDUCE)
// // fare la media dei valori

// // const meanFnct = (acc,curr,_,array) => (acc + (curr/array.length));
// // const arrayp3 = genericReduce(array1, meanFnct, 0);

// const arrayp3 = array1.reduce((acc,curr,_,array) => (acc + (curr/array.length)), 0)

// console.log(arrayp3);

// // ESERCIZIO 4 (REDUCE)
// // restituire il valore più basso e il più alto

// const maxMinFnct = (acc,curr) => {
//     if (curr < acc[0]) { acc[0] = curr; }
//     if (curr > acc[1]) { acc[1] = curr; }
//     return acc;
// };
// // const arrayp4 = genericReduce(array1, maxMinFnct, [array1[0], array1[0]]);

// const arrayp4 = array1.reduce(maxMinFnct, [array1[0], array1[0]]);

// console.log(arrayp4);

// const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

// // ESERCIZIO 5 (FILTER)
// // filtrare tutti i nomi piu grandi di 4 caratteri

// // const keepNamesBiggerThanFour = curr => curr.length > 4;
// // const arrayp5 = genericFilter(array2, keepNamesBiggerThanFour);

// const arrayp5 = array2.filter(curr => curr.length > 4)

// console.log(arrayp5);

// // ESERCIZIO 6 (MAP)
// // traformare tutte le stringe in maiuscolo

// // const toUpperStrings = curr => curr.toUpperCase();
// // const arrayp6 = genericMap(array2, toUpperStrings);

// const arrayp6 = array2.map(curr => curr.toUpperCase());

// console.log(arrayp6);

// // ESERCIZIO 7 (MAP)
// // mettere SOLO le iniziali maiuscole

// const arrayp7 = array2.map(curr => curr[0].toUpperCase() + curr.slice(1))

// console.log(arrayp7);

// // ESERCIZIO 8 (REDUCE)
// // restituire una stringa composta dalle iniziali delle parole

// const arrayp8 = array2.reduce((acc, curr) => acc + curr[0], "");

// console.log(arrayp8);

// // ESERCIZIO 9 (REDUCE)
// // sommare tutti i caratteri di tutte le stringhe

// const arrayp9 = array2.reduce((acc, curr) => acc + curr.length, 0);

// console.log(arrayp9);

// // ESERCIZIO 10 (MAP)
// // eliminare le vocali dalle stringhe

// function removeVowels(curr) {
//     const vowels = "aeiou";
//     let newCurr = "";

//     for (let j = 0; j < curr.length; j++) {

//         let char = curr[j]; //c'è anche charAt()
//         if (!vowels.includes(char.toLowerCase())) {
//             newCurr += char;
//         }
//     }

//     return newCurr
// }
// const arrayp10 = array2.map(removeVowels)

// console.log(arrayp10);

// // ESERCIZIO 11 (MAP)
// // restituire un array di numeri che sono le lunghezze delle singole parole

// const arrayp11 = array2.map(curr => curr.length)

// console.log(arrayp11);

// const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

// //ESERCIZIO 12 (MAP)
// //restituire un array di numeri che sono le lunghezze dei sigoli array

// const arrayp12 = array3.map(curr => curr.length)

// console.log(arrayp12);

// //ESERCIZIO 13 (REDUCE)
// //sommare tutti i numeri in tutti gli array

// const arrayp13 = array3.reduce((acc, curr) => acc + curr.reduce((acc, curr) => acc + curr,0), 0);

// console.log(arrayp13);

// //ESERCIZIO 14 (REDUCE)
// //sommare tutte le lunghezze degli array
// //devo scommentare la funzione dell'esercizio 12

// const arrayp14 = array3.reduce((acc, curr) => acc + curr.length, 0);

// console.log(arrayp14);

// //ESERCIZIO 15 (REDUCE)
// //sommare tutti i numeri con indice uguale e restituire un array di risultati x_x

// //funzione da cui convertire in reduce function
// function sumAllEqualIndex(arrayOfArrays) {
//     const newArray = [];

//     for (let i = 0; i < arrayOfArrays.length; i++) {
//         const array = arrayOfArrays[i];

//         for (let j = 0; j < array.length; j++) {
//             const number = array[j];
//             if(newArray[j]){
//                 newArray[j] = newArray[j] + number;
//             } else{
//                 newArray[j] = number;
//             }
//         }
//     }

//     return newArray;
// }

// console.log(sumAllEqualIndex(array3));

// //soluzione reduce

// const arrayp15 = array3.reduce((a, c) => { //current è un array
//     for (let j = 0; j < c.length; j++) {
//         const number = c[j];
//         if(a[j]){
//             a[j] = a[j] + number;
//         } else{
//             a[j] = number;
//         }
//     }
//     return a;
// }, []);

// console.log(arrayp15);

// // const arrayp16 = array3.reduce((a, c) => {
// //     a = c.map((num,i) => {
// //         let newNumber = num;
// //         if(a[i]){
// //             newNumber = newNumber + a[i];
// //         }
// //         return newNumber
// //     })
// // }, []);

// // console.log(arrayp16);

//ESERCIZI

const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    yob: 1995,
    marks: [9, 8, 10],
    nationality: 'italia',
    gender: 'm',
}

const jan = {
    name: 'jan',
    surname: 'stigliani',
    yob: 2000,
    marks: [7, 5, 8],
    nationality: 'italia',
    gender: 'm'
}

const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    yob: 1981,
    marks: [8, 8, 9],
    nationality: 'italia',
    gender: 'm'
}

const sara = {
    name: 'sara',
    surname: 'de prà',
    yob: 1989,
    marks: [7, 7, 6],
    nationality: 'italia',
    gender: 'fluid'
}

const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    yob: 2003,
    marks: [6, 6, 8],
    nationality: 'ecuador',
    gender: 'm'
}

const laura = {
    name: 'laura',
    surname: 'mazza',
    yob: 1984,
    marks: [5, 10, 9],
    nationality: 'italia',
    gender: 'f'
}

const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    yob: 1993,
    marks: [7, 8, 7],
    nationality: 'albania',
    gender: 'peanut'
}

const hugo = {
    name: 'hugo',
    surname: 'martinez',
    yob: 1994,
    marks: [9, 10, 10],
    nationality: 'elsalvador',
    gender: 'f'
}

const hugo2 = {
    name: 'hugo',
    surname: 'evil',
    yob: 1994,
    marks: [9, 10, 10],
    nationality: 'elsalvador',
    gender: 'f'
}

const laura2 = {
    name: 'laura',
    surname: 'old',
    yob: 1920,
    marks: [5, 10, 9],
    nationality: 'italia',
    gender: 'f'
}

const allStudents = [lorenzo, jeremias, hugo, laura, sara, eusebio, giovanni, jan, hugo2, laura2];

// //non gestisce quando due hanno lo stesso yob

// function sortByAge(student1, student2){
//     const yob1 = student1.yob; //campo su cui fare confronto
//     const yob2 = student2.yob;

//     return yob1 - yob2;
// }

function sortByAgeAndSurname(student1, student2){
    const yob1 = student1.yob; // campo su cui fare confronto
    const yob2 = student2.yob;

    if(yob1 - yob2 === 0){
        const surname1 = student1.surname; // campo su cui fare confronto 2
        const surname2 = student2.surname;
        return surname1.localeCompare(surname2); // return effettivo 2
    }

    return yob1 - yob2; // return effettivo
}

allStudents.sort(sortByAgeAndSurname);

//ESERCIZIO 1
//mettere in ordine gli studenti per nome e in caso di omonimia
//usare come ordine aggiuntivo l'età crescente

// function sortByNameAndAge(student1, student2){
//     const name1 = student1.name;
//     const name2 = student2.name;

//     if(name1 === name2){
//         const yob1 = student1.yob;
//         const yob2 = student2.yob;
//         return yob1 - yob2;
//     }

//     return name1.localeCompare(name2);
// }
// allStudents.sort(sortByNameAndAge);

console.log([...allStudents].sort((student1, student2) => {
    const name1 = student1.name;
    const name2 = student2.name;

    if(name1 === name2){
        const yob1 = student1.yob;
        const yob2 = student2.yob;
        return yob1 - yob2;
    }

    return name1.localeCompare(name2);
}))

//ESERCIZIO 2
//mettere in ordine gli studenti per media dei voti EZ

// function sortByMarksMean(student1, student2){
//     const mean1 = student1.marks.reduce((acc,curr,_,array) => (acc + (curr/array.length)),0);
//     const mean2 = student2.marks.reduce((acc,curr,_,array) => (acc + (curr/array.length)),0);
//     return mean1 - mean2;
// }
// allStudents.sort(sortByMarksMean);
// console.log(allStudents);

console.log([...allStudents].sort((student1,student2) => {
    const mean1 = student1.marks.reduce((acc,curr,_,array) => (acc + (curr/array.length)),0);
    const mean2 = student2.marks.reduce((acc,curr,_,array) => (acc + (curr/array.length)),0);
    return mean1 - mean2;
}));
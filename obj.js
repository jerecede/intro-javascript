// //OBJECT
// //struttura dati, dove valori vengono associati a key value

// const emptyObj = {};

// const student = {
//     name: "andrea", // key(una stringa), valore
//     surname: "asioli",
//     yob: 1978,
//     marks: [9, 10, 8],
//     address: {
//         street: "via canneto il curto",
//         streetNumber: 12,
//         cap: 16123,
//     },
//     isMarried: false,
//     "is Married": false,

//     // marksMean : () => student.marks.reduce((a, c) => {
//     //     a = a + c;
//     //     return a
//     // }, 0) / student.marks.length

//     // marksMean : function () {
//     //     let sum = 0;
//     //     for (const element of student.marks) {
//     //         sum += element;
//     //     }
//     //     const mean = sum / student.marks.length
//     //     return mean;
//     // }

//     //non si fanno cosi di solito le funzioni dentro oggetti
// }

// console.log(student.marksMean());

// console.log(student); //non ha ordine quando stampa, ordine casuale

// //come accedere ai value dell'oggetto
// console.log(student.name);
// console.log(student["surname"]);
// console.log(student["is Married"]); //console.log(student.is Married]); non funziona
// console.log(student.address.street);
// console.log(student.marks[0]);

// const startingObject = {};

// console.log(startingObject);

// startingObject.name = "startingObject";
// startingObject.creationDate = "21/02/2025";

// console.log(startingObject);

// const book1 = {
//     title: "eloquent js",
//     author: "Marijin Haverbeke",
//     edition: 4,
//     yop: 2024,
//     isAvailable: true
// }

// for (const key in book1) {
//     if (Object.prototype.hasOwnProperty.call(book1, key)) {
//         const value = book1[key];
//         console.log(`il valore associato alla chiave ${key} è ${value}`);
//     }
// }

// const arrayOfKeys = Object.keys(book1) //restituisce in array tutte le keys in string di un oggetto
// console.log(arrayOfKeys);

// for (const key in Object.keys(book1)) { // è sbagliato
//     const value = book1[key];
//     console.log(`il valore associato alla chiave ${key} è ${value}`);
// }

// const arrayOfValues = Object.values(book1) //resituisce in array tutte le values
// console.log(arrayOfValues);

// const arrayOfEntries = Object.entries(book1); //trasforma object in un array di array
// console.log(arrayOfEntries);

//errore è una costante
// const number1 = 6;
// number1 = 12;

//errore è una costante
// book1 = {
//     title: "odissea",
//     author: "omero",
//     edition: 112000,
//     yop: 2023,
//     isAvailable: false
// }

// book1.title = "odissea";
// book1.author = "omero";
// console.log(book1);
// //è una costante ma gli attrbuti possono essere cambiati, l'indirizzo dell'object che si trova su heap non può cambiare, ma il suo contenuto invece si

// //come fare blocco totale, tutto "const"
// Object.freeze(book1);
// book1.title = "ciao";
// book1.author = "ciao";
// console.log(book1); //è stato freezato quindi non cambierà

// const book2 = book1; //assegna indirizzo, non contenuto, quindi se modifico solo book2 anche book1 si modifica

// //un problema della console di js

// const student = {
//     name: "andrea", // key(una stringa), valore
//     surname: "asioli",
//     yob: 1978,
//     marks: [9, 10, 8],
//     address: {
//         street: "via canneto il curto",
//         streetNumber: 12,
//         cap: 16123,
//     }
// }

// // console.log(student); //appare 100000000000 e non 12 !!

// // student.name = "andreino";
// // student.address.streetNumber = 100000000000;

// // console.log(student);

// //si usa JSON (javascript object puntation) per evitare problemi di console.log, stringa univoca e pulita, usata tantissimo, importante

// console.log(JSON.stringify(student)); //fotografia istantanea che non può cambiare, perché stringa

// student.name = "andreino";
// student.address.streetNumber = 100000000000;

// console.log(JSON.stringify(student));

// //quello che produce JSON.stringify
// const studentString = '{"name":"giovanni","surname":"sussarello","yob":1981,"marks":[9,10,8],"address":{"street":"via calda","streetNumber":17,"cap":16123}}'
// const student2 = JSON.parse(studentString);
// console.log(student2);
// //lho rinconvertito in javascript
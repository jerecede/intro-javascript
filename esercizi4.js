// ESERCIZIO 1
// creare un oggetto studente per ogni partecipante al corso
// l'oggetto dovrà avere le seguenti keys: name, surname, gender, marks, yob, nationality
// mettere tutti gli oggetti dentro un array

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

const arrayStudents = [lorenzo, jeremias, hugo, laura, sara, eusebio, giovanni, jan];

// ESERCIZIO 2
// scrivere una funzione che restituisca l'età media dei studenti

function meanAge(array) {
    let media = 0;
    const yot = 2025; //year of today

    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        const studentAge = yot - student.yob; //year of today - year of birthday
        media += studentAge;
    }
    media = media / array.length;

    return media;
}

const prova = meanAge(arrayStudents);
console.log(prova);


// ESERCIZIO 3
// scrivere una funzione che restituisca un array di stringhe
// ogni stringa dovrà avere questo formato "name/cognome"

function getNameSurname(array) { //fromArrayOfStudentsToArrayOfNames
    let arrayNameSurname = []; //arrayOfNames

    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        const stringNameSurname = student.name + " " + student.surname;
        arrayNameSurname.push(stringNameSurname);
    }

    return arrayNameSurname;
}

const prova2 = getNameSurname(arrayStudents);
console.log(prova2);

// ESERCIZIO 4
// scrivere una funzione che restituisca la somma dei maschi e delle femmine

function getTotMaleFem(array) { //countersMalesAndFemales
    let arrayMaleFem = [0, 0, 0]; // maschi, femmine, altro //counters

    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        if (student.gender === 'm' || student.gender === 'M') {
            arrayMaleFem[0]++;
        } else if (student.gender === 'f' || student.gender === 'F') {
            arrayMaleFem[1]++;
        } else {
            arrayMaleFem[2]++;
        }
    }

    return arrayMaleFem;
}

// function getTotMaleFem2(array){

//     const arrayMaleFem = {
//         maleCounter: 0,
//         femaleCounter: 0,
//         otherCounter: 0
//     }

//     for (let i = 0; i < array.length; i++) {
//         const student = array[i];
//         if(student.gender === 'm' || student.gender === 'M'){
//             arrayMaleFem.maleCounter++;
//         } else if(student.gender === 'f' || student.gender === 'F'){
//             arrayMaleFem.femaleCounter++;
//         }else{
//             arrayMaleFem.otherCounter++;
//         }
//     }

//     return arrayMaleFem;
// }


const prova3 = getTotMaleFem(arrayStudents);
console.log(prova3);

// ESERCIZIO 5
// srivere una funzione che restituisca la media delle medie degli studenti

function meanOfMeans(array) {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        result += mean(student.marks);
    }
    result = result / array.length;

    return result;
}

function mean(array) {
    let mean = 0;

    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        mean += number;
    }
    mean = mean / array.length;

    return mean;
}

const prova4 = meanOfMeans(arrayStudents);
console.log(prova4);

//ALTRO MODO

function meanOfMeans2(arrayOfStudents) {
    const arrayOfMeans = [];
    for (const student of arrayOfStudents) {
        const mean = mean(student.marks);
        arrayOfMeans.push(mean)
    }
    const superMean = mean(arrayOfMeans);
    return superMean;
}

// ESERCIZIO 6
// scrivere una funzione che restituisca un oggetto strutturato cosi: {nationality1:[student1Name, student2Name...], naionality2:[student1Name, student2Name...] ...}

function createJson(keyArray, valueArray) {
    let json = "{";

    if (keyArray.length === valueArray.length) {
        for (let i = 0; i < keyArray.length; i++) {
            json = json + `"${keyArray[i]}":${valueArray[i]},`
        }
        json = json.slice(0, -1) + "}"
    }

    return json;
}

function orderForNationality(array) {
    let memory = "";
    let nationalityArrayString = [];
    let nationalityArrayAmount = [];
    for (let i = 0; i < array.length; i++) {
        const student = array[i];

        //aggiunge la nationality se è nuova
        if (memory.search(student.nationality) < 0) {
            memory = memory + student.nationality;
            nationalityArrayString.push(student.nationality);
            nationalityArrayAmount.push(1);

            //senno se la nationality è conosciuta ne aumenta il contatore
        } else {
            for (let j = 0; j < nationalityArrayString.length; j++) {
                const string = nationalityArrayString[j];
                if (student.nationality === string) {
                    nationalityArrayAmount[j]++;
                }
            }
        }
    }

    let objectNationality = {};
    const json = createJson(nationalityArrayString, nationalityArrayAmount);
    objectNationality = JSON.parse(json);

    return objectNationality;
}

const prova5 = orderForNationality(arrayStudents);
console.log(prova5);

//ALTRA SOLUZIONE

function countStudentsNationalities(array){
    const studentNationalities = {}

    for (const student of array) {
        const nationality = student.nationality;
        if(studentNationalities[nationality]){ // studentNationalities[nationality] !== undefined/null , se esiste
            studentNationalities[nationality]++;
        } else {
            studentNationalities[nationality] = 1;
        }
    }

    return studentNationalities;
}

const prova6 = countStudentsNationalities(arrayStudents);
console.log(prova6);

//NEGLI ESRECIZI DI PRIMA CI SONO I COUNTER, NON CHIEDEVA QUELLO
//SOLUZIONE DEFINITIVA

function countStudentsNationalities2(array){
    const studentNationalities = {}

    for (const student of array) {
        const nationality = student.nationality;
        if(studentNationalities[nationality]){ // studentNationalities[nationality] !== undefined/null , se esiste
            studentNationalities[nationality].push(student.name);
        } else {
            studentNationalities[nationality] = [student.name]; //crea array

            //lo stesso
            // studentNationalities[nationality] = [];
            // studentNationalities[nationality].push(student.name);
        }
    }

    return studentNationalities;
}

const prova7 = countStudentsNationalities2(arrayStudents);
console.log(prova7);

// ESERCIZIO 7
// jessbayer.com
// ESERCIZIO 1
// creare un oggetto studente per ogni partecipante al corso
// l'oggetto dovrà avere le seguenti keys: name, surname, gender, marks, yob, nationality
// mettere tutti gli oggetti dentro un array

const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    yob: 1995,
    marks: [9,8,10],
    nationality: 'italy',
    gender: 'm',
}

const jan = {
    name: 'jan',
    surname: 'stigliani',
    yob: 2000,
    marks: [7,5,8],
    nationality: 'italy',
    gender: 'm'
}

const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    yob: 1981,
    marks: [8,8,9],
    nationality: 'italy',
    gender: 'm'
}

const sara = {
    name: 'sara',
    surname: 'de prà',
    yob: 1989,
    marks: [7,7,6],
    nationality: 'italy',
    gender: 'fluid'
}

const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    yob: 2003,
    marks: [6,6,8],
    nationality: 'ecuador',
    gender: 'm'
}

const laura = {
    name: 'laura',
    surname: 'mazza',
    yob: 1884,
    marks: [5,10,9],
    nationality: 'italia',
    gender: 'f'
}

const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    yob: 1993,
    marks: [7,8,7],
    nationality: 'albania',
    gender: 'peanut'
}

const hugo = {
    name: 'hugo',
    surname: 'martinez',
    yob: 1994,
    marks: [9,10,10],
    nationality: 'elsalvador',
    gender: 'f'
}

const arrayStudents = [lorenzo, jeremias, hugo, laura, sara, eusebio, giovanni, jan];

// ESERCIZIO 2
// scrivere una funzione che restituisca l'età media dei studenti

function meanAge(array){
    let media = 0;

    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        let studentAge = getAge(student.yob);
    }

    return media;
}

const getAge = (yob, yot) => yot - yob;

// ESERCIZIO 3
// scrivere una funzione che restituisca un array di stringhe
// ogni stringa dovrà avere questo formato "name/cognome"

// ESERCIZIO 4
// scrivere una funzione che restituisca la somma dei maschi e delle femmine

// ESERCIZIO 5
// srivere una funzione che restituisca la media delle medke degli studenti

// ESERCIZIO 6
// scrivere una funzione che restituisca un oggetto strutturato cosi: {nationality1:[student1Name, student2Name...], naionality2:[student1Name, student2Name...] ...}

// ESERCIZIO 7
// jessbayer.com
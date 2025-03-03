class Human {
    constructor(name, surname, yob, nationality, gender) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.nationality = nationality;
        this.gender = gender;
    }

    getAge(){
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }

    toString() {
        const humanStr = `Nome: ${this.name}
Cognome: ${this.surname}
Età: ${this.getAge()}`;
        return humanStr;
    }
}

class Student extends Human {

    constructor(name, surname, yob, nationality, gender, marks = []) {
        super(name, surname, yob, nationality, gender);
        this.marks = marks;
    }

    addMark(mark){
        this.marks.push(mark);
    }

    calculateMean(){
        if (this.marks.length === 0){
            return -1;
        }

        let sumOfMarks = 0;

        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];
            sumOfMarks += mark;
        }

        const mean = sumOfMarks / this.marks.length;
        return mean;
    }

    getBestMark(){
        if(this.marks.length === 0){
            return -1;
        }
        return Math.max(...this.marks);
    }

    toString(){
        const studentStr = `${super.toString()}`;
        return studentStr;
    }

    compareTo(otherStudent){
        const name1 = this.name;
        const name2 = otherStudent.name

        if(name1 === name2){
            const yob1 = this.yob;
            const yob2 = otherStudent.yob;
            return yob1 - yob2;
        }

        return name1.localeCompare(name2);
    }
}

class Teacher extends Human{
    constructor(name, surname, yob, nationality, gender, subject, students = []) {
        super(name, surname, yob, nationality, gender);
        this.subject = subject;
        this.students = students
    }

    toString(){
        let teacherStr = `${super.toString()}`;
        return teacherStr;
    }
}

const student1 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
const student2 = new Student('eusebio', 'veizi', 1993, 'alb', 'm');
const student3 = new Student('lorenzo', 'puppo', 1995, 'it', 'm', [6, 6.5]);

const student4 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
const student5 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
const student6 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);

const student7 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
const student8 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
const student9 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);

const students1 = [student1, student2, student3];
const students2 = [student4, student5, student6];
const students3 = [student7, student8, student9];

const teacher1 = new Teacher('andrea', 'asioli', 1978, 'it', 'm', 'CS', students1);
const teacher2 = new Teacher('andrea', 'evil', 1978, 'it', 'm', 'CS', students2);
const teacher3 = new Teacher('andrea', 'old', 1878, 'it', 'm', 'CS', students3);

//////////////// ESERCIZIO 1 /////////////////
// aggiugere al toString di tutte le classi gender e nationality

//////////////// ESERCIZIO 2 /////////////////
// aggiugere a Teacher le funzioni: bestStudent e studentsMean

//////////////// ESERCIZIO 3 /////////////////
// aggiungere la classe Principal che erediterà da human e come caratteristiche avrà
// - un array di teachers
// - il nome della scuola

//////////////// ESERCIZIO 4 /////////////////
// aggiugere al Principal due funzioni: bestTeacher e bestStudent(tra tutti i teacher)
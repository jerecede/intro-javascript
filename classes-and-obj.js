class Human {
    constructor(name, surname, yob, nationality, gender) {
        this.name = name; //this si riferisce all'oggetto
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
        // const max = Math.max(...this.marks);
        // return this.marks.reduce((a, c) => Math.max(a,c), -1);

        // const max = Math.max(...this.marks);
        // return max >= 0 ? max : -1;

        if(this.marks.length === 0){
            return -1;
        }
        return Math.max(...this.marks); //più leggibile e performante
    }

    toString(){
        const studentStr = `${super.toString()}`;
        return studentStr;
    }
    //Student non trova getAge() e lo cerca su super e lo trova, override

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

const student1 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
const student2 = new Student('eusebio', 'veizi', 1993, 'alb', 'm');
const student3 = new Student('lorenzo', 'puppo', 1995, 'it', 'm', [6, 6.5]);

const students = [student1, student2, student3];

// console.log(student1.calculateMean()); //quando richiamo la funzione, this diventa student1
// console.log(student2.calculateMean()); //quando richiamo la funzione, this diventa student2

// console.log(student1.toString());
// console.log(student2.toString());
// console.log(student2 + '');
// console.log(student2 + 'pippo');

// students.sort((s1,s2) => s1.compareTo(s2));
// console.log(students);

// console.log(student1.getBestMark());

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

const teacher = new Teacher('Andrea', 'Asioli', 1978, 'it', 'm', 'CS', students);

console.log(teacher.toString());
console.log(student1.toString());
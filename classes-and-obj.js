class Student {

    constructor(name, surname, yob, nationality, gender, marks = []) {
        this.name = name; //this si riferisce all'oggetto
        this.surname = surname;
        this.yob = yob;
        this.nationality = nationality;
        this.gender = gender;
        this.marks = marks;
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
}

const student1 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
const student2 = new Student('eusebio', 'veizi', 1993, 'alb', 'm');

console.log(student1.calculateMean());
console.log(student2.calculateMean());
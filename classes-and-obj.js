// class Human {
//     #yob;
//     constructor(name, surname, yob, nationality, gender) {
//         this.name = name; //this si riferisce all'oggetto
//         this.surname = surname;
//         this.#yob = yob;  // se metto this._yob sto annotando che non deve essere acceduto dall'esterno
//         this.nationality = nationality;
//         this.gender = gender;
//     }

//     // getter yob
//     get yob(){
//         return this.#yob;
//     }

//     // volendo anche così, funzione non proprietà

//     // getYob(){
//     //     return this.#yob;
//     // }

//     // setter yob
//     set yob(value){
//         const now = new Date();
//         const year = now.getFullYear();
//         if(value > year){
//             console.log('errore, hai inserito una data futura');
//         } else if (value < (year - 150)){
//             console.log('errore, non accettiamo vampiri');
//         } else {
//             this.#yob = value;
//         }
//     }

//     //se scrivo this.yob richiama il getter
//     //invece se faccio this.yob = value richiama il setter

//     #getAge(){ // se metto _getAge sto annotando che non deve essere acceduto dall'esterno, adesso si usa #getAge
//         const now = new Date();
//         const year = now.getFullYear();
//         const age = year - this.#yob;
//         return age;
//     }

//     toString() {
//         const humanStr = `Nome: ${this.name}
// Cognome: ${this.surname}
// Età: ${this.#getAge()}`;
//         return humanStr;
//     }
// }

// class Student extends Human {

//     constructor(name, surname, yob, nationality, gender, marks = []) {
//         super(name, surname, yob, nationality, gender);
//         this.marks = marks;
//     }

//     addMark(mark){
//         this.marks.push(mark);
//     }

//     // get mean(){ // this.mean, è una proprietà non una funzione

//     //     if (this.marks.length === 0){
//     //         return -1;
//     //     }

//     //     let sumOfMarks = 0;

//     //     for (let i = 0; i < this.marks.length; i++) {
//     //         const mark = this.marks[i];
//     //         sumOfMarks += mark;
//     //     }

//     //     const mean = sumOfMarks / this.marks.length;
//     //     return mean;
//     // }

//     calculateMean(){ // this.caculateMean()

//         if (this.marks.length === 0){
//             return -1;
//         }

//         let sumOfMarks = 0;

//         for (let i = 0; i < this.marks.length; i++) {
//             const mark = this.marks[i];
//             sumOfMarks += mark;
//         }

//         const mean = sumOfMarks / this.marks.length;
//         return mean;
//     }

//     getBestMark(){
//         // const max = Math.max(...this.marks);
//         // return this.marks.reduce((a, c) => Math.max(a,c), -1);

//         // const max = Math.max(...this.marks);
//         // return max >= 0 ? max : -1;

//         if(this.marks.length === 0){
//             return -1;
//         }
//         return Math.max(...this.marks); //più leggibile e performante
//     }

//     toString(){
//         const studentStr = `${super.toString()}`;
//         return studentStr;
//     }
//     //Student non trova getAge() e lo cerca su super e lo trova, override

//     compareTo(otherStudent){
//         const name1 = this.name;
//         const name2 = otherStudent.name

//         if(name1 === name2){
//             const yob1 = this.yob;
//             const yob2 = otherStudent.yob;
//             return yob1 - yob2;
//         }

//         return name1.localeCompare(name2);
//     }
// }

// class Teacher extends Human{
//     constructor(name, surname, yob, nationality, gender, subject, students = []) {
//         super(name, surname, yob, nationality, gender);
//         this.subject = subject;
//         this.students = students
//     }

//     toString(){
//         let teacherStr = `${super.toString()}`;
//         return teacherStr;
//     }
// }

// const student1 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
// const student2 = new Student('eusebio', 'veizi', 1993, 'alb', 'm');
// const student3 = new Student('lorenzo', 'puppo', 1995, 'it', 'm', [6, 6.5]);

// const students = [student1, student2, student3];

// console.log(student1.calculateMean()); //quando richiamo la funzione, this diventa student1
// console.log(student2.calculateMean()); //quando richiamo la funzione, this diventa student2

// console.log(student1.toString());
// console.log(student2.toString());
// console.log(student2 + '');
// console.log(student2 + 'pippo');

// students.sort((s1,s2) => s1.compareTo(s2));
// console.log(students);

// console.log(student1.getBestMark());

// const teacher = new Teacher('Andrea', 'Asioli', 1978, 'it', 'm', 'CS', students);

// console.log(teacher.toString());
// console.log(student1.toString());

//CLASS SENZA OGGETTI

//Math non dipende da this, per chiamre le sue funzioni basta scrivere la classe, senza creare oggetti

// class Circle {

//     static PI = 3.14;

//     constructor(centerX, centerY, r) {
//         this.centerX = centerX;
//         this.centerY = centerY;
//         this.r = r;
//     }

//     get diameter(){
//         return this.r * 2;
//     }

//     calculatePerimeter(){
//         return 2 * this.r * Circle.PI; //!!!!!
//     }

//     calculateA(){
//         return (this.r ** 2) * Circle.PI;
//     }
// }

// const circle1 = new Circle(0, 0, 10);
// console.log(circle1.diameter);
// console.log(circle1.calculatePerimeter());

// const circle2 = new Circle(0, 0, 20);
// console.log(circle2.diameter);
// console.log(circle2.calculatePerimeter());
// console.log(Circle.PI);
// console.log(circle2.calculateA());

// class Math2 {

//     static sum(n1, n2){
//         return n1 + n2;
//     }

//     static absolute(n){
//         if(n >= 0){
//            return n;
//         }
//         return n * -1;
//     }

//     static cube(n){
//         return n ** 3;
//     }
// }

// console.log(Math2.cube(5));
// console.log(Math2.sum(Math2.cube(-5), Math2.cube(Math2.absolute(-3))));

//POLIMORFISMO

class Animal {

    constructor(name) {
        this.name = name;
    }

    sayName(){
        return `I'm ${this.name}`;
    }

    speak(){
        return '?';
    }

}

class Dog extends Animal {

    constructor(name) {
        super(name);
    }

    speak(){
        return 'bau bau bau';
    }
}

class Cat extends Animal {

    constructor(name) {
        super(name);
    }

    speak(){
        return 'miao miao miao';
    }
}

const cat1 = new Cat('laura');
const cat2 = new Cat('lorenzo');
const dog1 = new Dog('giovanni');
const dog2 = new Dog('jan');
const cat3 = new Cat('hugo');
const cat4 = new Cat('eusebio');
const cat5 = new Cat('jeremias');

const animals = [cat1, cat2, dog1, dog2, cat3, cat4, cat5]; //ci sono tipi diversi, ma diventano tutti animals

for (let i = 0; i < animals.length; i++) { //ma qui diventano ritornano quello che sono, cat e dog
    const animal = animals[i];
    console.log(animal.sayName() + ' ' + animal.speak());
}

//1) aggiungere al toString di tutte le classi gender e nationality

//2) aggiungere a teacher le funzioni: bestStudent e StudentsMean(media delle medie)

//3) aggiungere la classe Principal che erediterà da human e come caratteristiche avrà
//   un array di teachers
//   il nome della scula

//4) aggiungere al principal due funzioni: bestTeacher(mediadellemediepiùalte) e bestStudent


class Human {
    constructor(name, surname, yob, nationality, gender) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.nationality = nationality;
        this.gender = gender;
    }

    getAge() {
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }

    toString() {
        const humanStr = `nome:${this.name}
cognome:${this.surname}
età:${this.getAge()}
gender:${this.gender}
nazionalità:${this.nationality}`
        return humanStr;
    }

}

// class Principal extends Human {
//     constructor(name, surname, yob, nationality, gender, school, teachers = []) {
//         super(name, surname, yob, nationality, gender)
//         this.school = school;
//         this.teachers = teachers
//     }

//     bestTeacher() {
//         let bestTeacher = this.teachers[0];

//         for (let i = 1; i < this.teachers.length; i++) {
//             const currentTeacher = this.teachers[i];
//             if (currentTeacher.calculateStudentsMean() > bestTeacher.calculateStudentsMean()) {
//                 bestTeacher = currentTeacher;
//             }
//         }
//         return bestTeacher;
//     }

//     bestStudent() {
//         let bestMean = -1;
//         let bestStudent = {};

//         for (const teacher of this.teachers) {
//             const student = teacher.bestStudent();
//             const mean = student.calculateMean();
//             console.log(student);
//             console.log(mean);
//             if(mean > bestMean){
//                 bestStudent = student;
//                 bestMean = mean;
//             }
//         }

//         return bestStudent;
//     }

//     toString() {
//         const principalStr = `${super.toString()}
//scuola: ${this.school}`
//         return principalStr;
//     }
// }

// class Student extends Human {

//     constructor(name, surname, yob, nationality, gender, marks = []) {
//         super(name, surname, yob, nationality, gender)
//         this.marks = marks;
//     }

//     addMark(mark) {
//         this.marks.push(mark);
//     }

//     calculateMean() {
//         if (this.marks.length === 0) {
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

//     getBestMark() {
//         let best = -1;
//         for (const mark of this.marks) {
//             if (mark > best) {
//                 best = mark;
//             }
//         }
//         return best;
//     }

//     toString() {
//         let studentStr = `${super.toString()}
//media voti:${this.calculateMean()}`
//         return studentStr;
//     }

//     compareTo(otherStudents) {
//         const name1 = this.name;
//         const name2 = otherStudents.name;

//         if (name1 === name2) {
//             const yob1 = this.yob;
//             const yob2 = otherStudents.yob;
//             return yob1 - yob2;
//         }

//         return name1.localeCompare(name2);

//     }
// }

// class Teacher extends Human {
//     constructor(name, surname, yob, nationality, gender, subject, students = []) {
//         super(name, surname, yob, nationality, gender)
//         this.subject = subject;
//         this.students = students;
//     }

//     bestStudent() {
//         let bestStudent = this.students[0];

//         for (let i = 1; i < this.students.length; i++) {
//             const currentStudent = this.students[i];
//             if (currentStudent.calculateMean() > bestStudent.calculateMean()) {
//                 bestStudent = currentStudent;
//             }
//         }
//         return bestStudent;
//     }

//     calculateStudentsMean() {
//         if (this.students.length === 0) {
//             return -1;
//         }

//         let sumOfMeans = 0;

//         for (let i = 0; i < this.students.length; i++) {
//             const mean = this.students[i].calculateMean();

//             sumOfMeans += mean;
//         }
//         const mean = sumOfMeans / this.students.length;
//         return mean;
//     }

//     toString() {
//         const teacherStr = `${super.toString()}
//materia: ${this.subject}
//numero di studenti:${this.students.length}`
//         return teacherStr;
//     }

// }

// const student1 = new Student('laura', 'mazza', '1984', 'it', 'f', [8, 7]);
// const student2 = new Student('eusebio', 'veizi', '1993', 'alb', 'm', [6, 6.5]);
// const student3 = new Student('lorenzo', 'puppo', '1995', 'it', 'm', [9, 6]);

// const student4 = new Student('jan', 'stigliani', '2000', 'it', 'm', [6, 8]);
// const student5 = new Student('giovanni', 'sussarellu', '1981', 'it', 'm', [6, 6.5]);
// const student6 = new Student('sara', 'de prà', '1989', 'it', 'f', [9, 5]);

// const student7 = new Student('jeremias', 'cedeno', '2003', 'ecu', 'm', [7, 8.5]);
// const student8 = new Student('hugo', 'martinez', '1994', 'slv', 'm', [8, 6.5]);
// const student9 = new Student('clarabella', 'de topolini', '2001', 'top', 'f', [9, 7.5]);

// const students1 = [student1, student2, student3];
// const students2 = [student4, student5, student6];
// const students3 = [student7, student8, student9];

// const teacher1 = new Teacher('andrea', 'asioli', 1978, 'it', 'm', 'CS', students1);
// const teacher2 = new Teacher('andrea', 'evil', 1978, 'it', 'm', 'CS', students2);
// const teacher3 = new Teacher('andrea', 'old', 1878, 'it', 'm', 'CS', students3);

// const teachers = [teacher1, teacher2, teacher3];

// const principal = new Principal('pippo', 'de topolini', '1958', 'top', 'm', 'Italo Topino', teachers);

// console.log(teacher1.toString());
// console.log(teacher1.bestStudent());
// console.log(teacher1.calculateStudentsMean());
// console.log(principal.toString());
// console.log(principal.bestTeacher());
// console.log(principal.bestStudent());

//----------------------------------------------------------------------------------------------------------------------------------

//1)Crea una classe base ContoBancario:
    //-La classe ContoBancario deve avere le seguenti proprietà: titolare (Human) saldo (numero)
    //-La classe ContoBancario deve avere i seguenti metodi:
        //-toString()
        //-deposita(importo): Aggiunge l'importo al saldo.
        //-preleva(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti, altrimenti stampa un messaggio di errore.

//2)Crea una classe derivata ContoCorrente che eredita da ContoBancario:
    //-La classe ContoCorrente deve avere le seguenti proprietà aggiuntive:
        //-limiteSpesa (numero)
    //-La classe ContoCorrente deve avere i seguenti metodi aggiuntivi:
        //-paga(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti o se l'importo è entro il limite di spesa, altrimenti stampa un messaggio di errore.
        // se il pagamento va a buon fine il metodo aggiunge al saldo il 2% dell'importo

//3)Crea una classe derivata ContoRisparmio che eredita da ContoBancario:
    //-La classe ContoRisparmio deve avere le seguenti proprietà aggiuntive:
        //-sogliaBonus(numero)
    //-La classe ContoRisparmio deve avere i seguenti metodi aggiuntivi:
        //-applicaBonus(): Aggiunge un bonus del 2% (del saldo) al saldo se il saldo supera la soglia.

class ContoBancario {
    constructor(titolare, saldo) { // obj Human, number
        this.titolare = titolare;
        this.saldo = saldo;
    }

    deposita(importo){
        if(importo > 0){
            this.saldo += importo;
        }
    }

    preleva(importo){
        if(importo <= this.saldo && importo > 0){
            this.saldo -= importo;
        } else {
            console.log('prelievo impossibile da eseguire');
        }
    }

    toString(){
        const str = `Titolare:\n\n${this.titolare.toString()}\n
Saldo Totale: ${this.saldo.toFixed(2)}€`
         return str;
    }
}

// const persona1 = new Human('jeremias', 'cedeno', 2003, 'ecu', 'm');
// const contoBancario1 = new ContoBancario(persona1, 500);
// console.log(contoBancario1.toString());
// contoBancario1.deposita(-5);
// console.log(contoBancario1.toString());
// contoBancario1.preleva(500);
// console.log(contoBancario1.toString());

class ContoCorrente extends ContoBancario {
    constructor(titolare, saldo, limiteSpesa) {
        super(titolare, saldo)
        this.limiteSpesa = limiteSpesa;
    }

    paga(importo){
        if(importo <= this.saldo && importo > 0 && importo <= this.limiteSpesa){
            const bonus = importo * 0.2;
            this.saldo = this.saldo - importo + bonus;
        } else {
            console.log('pagamento impossibile da eseguire');
        }
    }
}

class ContoRisparmio extends ContoBancario {
    constructor(titolare, saldo, sogliaBonus) {
        super(titolare, saldo)
        this.sogliaBonus = sogliaBonus;
    }

    applicaBonus(){
        if(this.saldo > this.sogliaBonus){
            const bonus = this.saldo * 0.2;
            this.saldo = this.saldo + bonus;
        }
    }
}

// const persona3 = new Human('jeremias', 'cedeno', 2003, 'ecu', 'm');
// const contoBancario3 = new ContoRisparmio(persona3, 500, 900);
// console.log(contoBancario3.toString());
// contoBancario3.deposita(500);
// console.log(contoBancario3.toString());
// contoBancario3.applicaBonus();
// console.log(contoBancario3.toString());
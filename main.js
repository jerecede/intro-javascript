//cosa scrivere nella console
console.log("hello world");
console.log("ciao mondo");

//ci sono operatori binari e non binari
//typeof, operatore che mi dice la tipologia
console.log(typeof 5); //number
console.log(typeof "hello world"); //string
console.log(typeof true); //boolean

//NUMBER

5; //integer
7.68; //float
3.1e4; //esponenziali 310000
Infinity; //numero più grande possibile
-Infinity; //numero più piccolo possibile

NaN; //not a number
console.log(typeof NaN); //è un number XD
console.log(0/0); //esce NaN

//OPERAZIONI

console.log("somma 5 + 7", 5 + 7, "yeeee");
console.log("sottrazione 5 - 7", 5 - 7);
console.log("negativo - 7", - 7);
console.log("prodotto 5 * 7", 5 * 7);
console.log("divisione 5 / 7", 5 / 7);
console.log("potenza 2**5, 2 alla quinta", 2**5);
console.log("modulo 5 % 2", 5 % 2);
console.log("modulo 12 % 5", 12 % 5);

//OPERAZIONI MATH

console.log("radice quadrata 9", Math.sqrt(9));
console.log('arrotondamento 9.6', Math.round(9.6)); //Math.floor difetto, Math.ceil eccesso

//STRING

console.log("234", 234); //stringa in bianco, numero e boolean in verde
console.log("io sono una stringa");
console.log('io sono una stringa'); //non cambia
console.log('io sono una "stringa"');
console.log("l'apostrofo è importante"); //l'utilità di usarli entrambi
console.log("\"l'apostrofo\" è importante"); // \ backslash
console.log("\"l'apostrofo\" è importante\n non ne posso fare a meno"); // \n accapo

console.log(``); //alt+96
console.log(`"l'apostrofo" è importante
    non ne posso fare a meno`); //i tab e gli accapo che fai li mostra alla console
console.log(`la somma di 5 e 7 è ${7 + 5}`); //può fare le operazioni dentro

console.log('ciao a tutti' + ' ' + 'mi chiamo pippo'); //concatena le stringhe

//BOOLEAN

console.log("vero", true);
console.log("falso", false);
//not
console.log("not vero", !true);
console.log("not falso", !false);
//and
console.log("true and true", true && true);
console.log("false and true", false && true);
console.log("true and false", true && false);
console.log("false and false", false && false);
//or
console.log("true or true", true || true);
console.log("false or true", false || true);
console.log("true or false", true || false);
console.log("false or false", false || false);

//UNDEFINED e NULL

console.log(typeof undefined); //non definito default
console.log(typeof null); //non definito perchè l'hai messo tu, object

//OPERATORI DI CONFRONTO

//uguaglianza == / ===
console.log("5 è uguale a 5?", 5 == 5);
console.log("5 è uguale a 6?", 5 == 6);
console.log("5 è uguale a 5? (===)", 5 === 5);
console.log("5 è uguale a 6? (===)", 5 === 6);
console.log("la stringa 5 è uguale al numero 5", "5" == 5); //forza la conversione della stringa to number
console.log("la stringa 5 è uguale al numero 5 (===)", "5" === 5); //=== risolve il problema

//disuguaglianza != / !==
console.log("la stringa 6 è diversa dal numero 6", "6" != 6); //stessa cosa di prima, conversione
console.log("la stringa 6 è diversa dal numero 6", "6" !== 6);

//confronto < / <= / > / >=
console.log("5 è minore di 6", 5 < 6);
console.log("5 è maggiore di 6", 5 > 6);
//confronto stringhe
console.log("a è maggiore di b", "a" > "b"); //ogni carattere è associato a un numero, emoji sono due caratteri
console.log("a è minore di b", "a" < "b");
console.log("a è maggiore di A", "a" > "A");
console.log("b è magiore di A", "b" > "A");

//VARIABILI

//come dichiarare: var, let, const

//let, dichiarazione standard, variabile che può essere riutilizzata cambiata, ridefinita con un altro tipo dato
let pippo = 5; //assegnazione
let pippo2 = 5*5 //prima eseguisce operazione e poi assegnazione
console.log(pippo);
console.log(pippo + 2);
pippo = "ciao";
console.log(pippo);

//const, constant, non può essere riutilizzato cambiato, più a prova di errori, se vogliamo cambiarla la convertiamo
const pluto = 9;
console.log(pluto);
console.log(pluto + 2);
//pluto = 'ciao'; da errore

//var, non si usa mai, anticuado, non indica gli errori, hoisting, solo con var succede, let non fa queste cose D:
paperino = 10;
console.log(paperino);
var paperino //facendo let paperino darebbe errore
console.log(paperina);
var paperina //facendo let paperina darebbe errore

//CamelCase, cammello crea gobbe
const numeroDaElevarePotenza = 9;
const esponenteDellaPotenza = 2;
console.log(numeroDaElevarePotenza ** esponenteDellaPotenza);

//SHORT CIRCUIT OPERATOR

const qui = 5 || 6; //tutti i numeri che non sono 0, variabile vuota o null risultano Vero, alla fine assegna il 5
console.log(qui);
const quo = 6 || 5; //alla fine assegna il 6
console.log(quo);

const qua = 5 ?? 6;
console.log(qua);
const que = false ?? 5; // || controlla solo il default invece ?? controla se c'è uno spazio vuoto
console.log(que);
const quu = undefined ?? 5;
console.log(quu);
const qua2 = false || 5;
console.log(qua2);

const qui2 = (5 > 4) ? 10 : 20; //guardndo la console capisci come funziona
console.log(qui2);
const quo2 = (5 < 4) ? 10 : 20;
console.log(quo2);
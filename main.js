//cosa scrivere nella console
console.log("hello world");
console.log("ciao mondo");

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
console.log("prodotto 5 * 7", 5 * 7);
console.log("divisione 5 / 7", 5 / 7);
console.log("potenza 2**5, 2 alla quinta", 2**5);

console.log("modulo 5 % 2", 5 % 2);
console.log("modulo 12 % 5", 12 % 5);

//OPERAZIONI MATH

console.log("radice quadrata 9", Math.sqrt(9));
console.log('arrotondamento 9.6', Math.round(9.6)); //Math.floor difetto, Math.ceil eccesso

//STRING

console.log("234", 234); //stringa in bianco, numero in verde
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
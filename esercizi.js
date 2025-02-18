let piramide = "";
let altezza = parseInt(prompt("quanto righe vuoi nella piramide"));
if(altezza < Infinity && altezza > 0) {
    for (let i = 0; i < altezza; i++) {
        piramide += "#";
        console.log(piramide);
    }
    console.log("sta piramide è alta " + altezza + " righe");
}
else{
    alert("devi inserire un numero, e maggiore di 0 possibilmente, ignorante...");
}

//NaN non puoi compararlo
let parola1 = prompt("Inserisci la prima parola");
let parola2 = prompt("Inserisci la seconda parola");

if (parola1 > parola2) {
    document.write(`${parola1}`);
    document.write(`${parola2}`);
}
else if (parola1 < parola2) {
    document.write(`${parola2}`);
    document.write(`${parola3}`);
}

else {
    document.write("La parola ha la stessa lunghezza");
}
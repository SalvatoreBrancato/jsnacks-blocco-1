let primoNumero = prompt("Inserire un numero");
let secondoNumero = prompt("Inserire un numero");

if (primoNumero > secondoNumero) {
    document.write(`${primoNumero}`);
}
else if (primoNumero < secondoNumero) {
    document.write(`${secondoNumero}`);
}
else {
    document.write(`Numero pari`);
}
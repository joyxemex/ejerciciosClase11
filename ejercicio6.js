/*
Ejercicio 6: La tabla de multiplicar
Consigna: Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for.
*/
const prompt = require('prompt-sync')();

let numeroUsuario = parseInt(prompt("ingrese un numero para ver su tabla de multiplicar "));

console.log( "su tabla es la del "+ numeroUsuario );


for (let i = 1 ; i <= 10 ; i++){

    let resultado = numeroUsuario * i ;

     console.log(numeroUsuario + " x " + i + " = " + resultado);
}
//Ejercicio 1: ¿Positivo, negativo o cero?
//Consigna:
//Vamos a trabajar con números y aprender a clasificarlos. 
// Escribe un programa que le pida al usuario un número cualquiera. 
//El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if 
//para resolverlo y muestra un mensaje explicativo en cada caso.

//LLAMAMOS A LA LIBRERIA
const prompt = require ('prompt-sync')

// ingreso de datos

let numero = parseInt(prompt("ingrese un numero cualquiera"));
 if (numero > 0 ){
    console.log ("el numero es positivo");
 } else if (numero < 0){
    console.log("el numero es negativo");
 } else {
    console.log("el numero es cero");
 }


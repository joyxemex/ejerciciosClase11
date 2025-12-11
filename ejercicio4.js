/*
Ejercicio 4: ¿Es par o impar?
Consigna: Los números pueden ser pares o impares. 
Escribe un programa que le pida al usuario un número y determine si es par o impar. 
Muestra un mensaje explicativo indicando qué significa cada caso.
*/ 
let numero = parseInt(prompt("Ingresa un número: "));


if (numero % 2 === 0) {
    
    console.log("El número " + numero + " es PAR (se puede dividir por 2 exactamente).");

} else {
    
    console.log("El número " + numero + " es IMPAR (sobra 1 al dividir por 2).");
}
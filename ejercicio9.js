/* 
Ejercicio 9: Cuenta regresiva para el despegue
Consigna: Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete.
 El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo for
  para realizar la cuenta regresiva.*/

const prompt = require('prompt-sync')();

  console.log("INICIA SECUENCIA DE DESPEGUE");


for(let i = 10 ; i <=0 ; i --){

    console.log("T-minus: " + i);
}


  console.log("DESPEGUE!!!")
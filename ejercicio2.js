/* 
Ejercicio 2: Semáforo inteligente
Consigna: Vamos a programar un semáforo. 
Escribe un programa que le pida al usuario ingresar un color del 
semáforo: rojo, amarillo o verde. Dependiendo del color ingresado, 
el programa debe imprimir un mensaje con la acción correspondiente:
● Rojo: "Alto, no puedes avanzar."
● Amarillo: "Precaución, prepárate para avanzar."
● Verde: "Avanza con seguridad." Si el usuario ingresa un color inválido, 
el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde." 
Utiliza un switch para resolver este ejercicio.
*/
//LLAMAMOS A LA LIBRERIA
const prompt = require ('prompt-sync')();

let colorSemaforo = prompt("ingrese un color de semaforo rojo, amarillo o verde ");

switch (colorSemaforo){
    //si el semaforo es verde
    case "verde" :
        console.log("Avanza con seguridad.");
        break;
   case "amarillo" : 
         console.log("Precaución, prepárate para avanzar.");
         break;
    case "rojo" :
        console.log("Alto, no puedes avanzar.");
     default:
            console.log("error el color ingresado es incorrecto");
        //en el default no hace falta escribir el break por que ya es el final
        break; 
}
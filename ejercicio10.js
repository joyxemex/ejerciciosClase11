/*
Ejercicio 10: Adivina el número
Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.
*/

// 1. IMPORTAR LA HERRAMIENTA
const prompt = require('prompt-sync')();

/**
 * Ejercicio 10: Adivina el número
 * La computadora selecciona un número al azar entre 1 y 10.
 * El usuario tiene 3 intentos para adivinarlo.
 */

// 1. La computadora selecciona un número al azar entre 1 y 10.
// Math.random() * 10 genera un número entre 0 y 9.99...
// Math.floor() redondea hacia abajo.
// Le sumamos 1 para que el rango sea de 1 a 10 (inclusive).
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const intentosMaximos = 3;
let adivinado = false;

console.log("¡Bienvenido al juego de adivinar el número!");
console.log(`Tienes ${intentosMaximos} intentos para adivinar un número entre 1 y 10.`);

// 2. Usamos un bucle for para gestionar los 3 intentos.
for (let i = 1; i <= intentosMaximos; i++) {
  // Pedimos al usuario que ingrese un número.
  // Usamos prompt() que funciona en el navegador, o podríamos usar un input si fuera un HTML.
  // En un entorno de consola Node.js, se requeriría un módulo como 'readline-sync'.
  // Asumimos un entorno de navegador para este ejemplo.
  const intentoUsuario = parseInt(prompt(`Intento ${i}/${intentosMaximos}: Ingresa un número:`));

  // Verificamos si el input es válido (un número)
  if (isNaN(intentoUsuario)) {
    console.log("Entrada no válida. Por favor, ingresa un número.");
    // Restamos 1 al contador para no penalizar el intento fallido por error de input
    i--; 
    continue; // Continuamos con la siguiente iteración del bucle
  }

  // 3. Comparamos el intento del usuario con el número secreto.
  if (intentoUsuario === numeroSecreto) {
    console.log(`¡Felicitaciones! ¡Adivinaste el número secreto (${numeroSecreto}) en el intento ${i}! 🎉`);
    adivinado = true;
    break; // Detenemos el bucle for si el usuario acierta.
  } else {
    // Damos una pista si falla (opcional, pero útil)
    const pista = intentoUsuario < numeroSecreto ? 'El número secreto es mayor.' : 'El número secreto es menor.';
    console.log(`Incorrecto. ${pista}`);
  }
}

// 4. Si el bucle termina sin haber adivinado, mostramos el número secreto.
if (!adivinado) {
  console.log(`¡Oh no! Te quedaste sin intentos. El número secreto era el ${numeroSecreto}. 😢`);
}

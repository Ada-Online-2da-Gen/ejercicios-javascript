// Hacer un programa que nos permita sumar 3 numeros, pero a medida que vamos sumando numeros nos tiene que indicar la suma parcial y cuantos numeros nos quedan por ingresar

let numerosRestantes = 3; // 3
let resultado = 0; // 10

let numero = Number(prompt(`Le quedan ${numerosRestantes} números por ingresar. La suma hasta el momento es ${resultado}. Por favor ingrese un número`)); // 10

resultado += numero; // 10

numerosRestantes--;

numero = Number(prompt(`Le quedan ${numerosRestantes} números por ingresar. La suma hasta el momento es ${resultado}. Por favor ingrese un número`)); // 5

resultado += numero; // 10 + 5

numerosRestantes--;

numero = Number(prompt(`Le quedan ${numerosRestantes} números por ingresar. La suma hasta el momento es ${resultado}. Por favor ingrese un número`)); // 20

resultado += numero; // 15 + 20

numerosRestantes--;

alert(`Le quedan ${numerosRestantes} números por ingresar. La suma total es ${resultado}`);

# Estructuras de datos: Arrays

Todo ejercicio que incluya emojis puede ser sustituido con strings

**Saludos**

Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:

    // Ingrese nombres: Ada Greta Grace
    
    // ¡Hola Ada!
    // ¡Hola Greta!
    // ¡Hola Grace!

**Menor número**

Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:

    // Ingrese números: 5 7 99 34 54 2 12
    
    // El menor número es: 2

**Suma de todos los números**

Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:

    // Ingrese números: 5 7 10 12 24
    
    // La suma de todos los números es: 58

**Contiene elementos**

Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:

    // Ingrese valores: 5 7 99 34 54 2 12
    // Ingrese valor a buscar: 54
        
    // El valor 54 se encuentra entre los valores originales

**Encontrar índice**

Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:

    // Ingrese valores: 5 7 12 34 54 2 12
    // Ingrese valor a buscar: 12
        
    // El valor 12 se encuentra en el índice 12

Una vez hecho este ejercicio, investigar el método `indexOf`.

**Sam y Frodo**

Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:

    // Ingresar nombres: Sam Frodo Legolas
    // Sam y Frodo están juntos, ¡Frodo está a salvo!
    
    // Ingresar nombres: Sam Orco Frodo
    // Sam y Frodo están separados, ¡Frodo está en peligro!

**Frutas**

Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:

    // Ingrese frutas: 🍎🍎🍐🍑🍎🍑
    
    // Hay 3 🍎, 1 🍐 y 2 🍑

**Comida para monos**

Crear un programa que permita ingresar una lista de 🐵(monos) y **🍌**(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

    // Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
    // Cuántas bananas come un mono?: 2
    // ¡Oh no!¡No hay suficientes bananas para los monos! 😭

**Perros y gatos**

Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:

    // Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
    // Resultado: 🐶🐶🐶🐶🐱🐱🐱

**Chat**

Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:

- Para una usuaria, debe mostrar: `nombre usuaria + está conectada`
- Para dos usuarias, debe mostrar: `nombre usuaria 1 + y +  nombre usuaria 2 + están conectadas`
- Para más de dos usuarias, debe mostrar: `nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas`

Ejemplo:

    // Ingrese nombres de usuarias: Ada
    // Ada está conectada
    
    // Ingrese nombres de usuarias: Ada Grace
    // Ada y Grace están conectadas
    
    
    // Ingrese nombres de usuarias: Ada Grace Marie
    // Ada, Grace y 1 persona(s) más están conectadas

**Germinación**

Crear un programa que permita ingresar una lista de flores y plantines (🌱). La lista debe comenzar con una flor, si no lo hace debe mostrar un mensaje de error. El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a su izquierda. Ejemplo:

    // Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
    // ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸

**Plantas**
Crear un programa que permita ingresar una lista de plantas con una oruga entre ellas. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga. Ejemplo:

    // Ingrese plantas y oruga: 🌱🌱🌱🌱🐛🌱🌱🌱🌱
    // Plantas sobrevivientes: 🌱🌱🌱🌱🌱

**Tragamonedas**

Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:

    // Ingrese símbolos: ⭐️⭐️⭐️💫✨
    // ¡Has perdido! Inténtalo nuevamente
    
    // Ingrese símbolos: 💫💫💫💫💫
    // ¡Felicitaciones! Has ganado
    

**Revertir array**

Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso. Ejemplo:

    // Ingrese números: 5 7 99 34 54 2 12
    
    // El array invertido es: [12, 2, 54, 34, 99, 7, 5]

**Multiplicar números individuales**

Crear un programa que pida ingresar números separados por espacios y luego pregunte por cuánto se desea multiplicar cada número. El programa debe devolver un mensaje con un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

    // Ingrese números: 5 7 15 22 40
    // Ingrese multiplicador: 2
    
    // El array resultante es: [10, 14, 30, 44, 80]

**Exterminador**

Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con todos los animales menos los mosquitos y alacranes. Ejemplo:

    // Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂
    
    // Animales sin insectos: [🐱, 🐭, 🐶, 🦊]

**Arrays iguales**

Crear un programa que permita ingresar dos listas de valores separados por espacio y muestre en un mensaje si las listas son iguales o no (mismos valores en mismo orden). Ejemplo:

    // Ingrese valores de lista 1: 10 25 6 33 48 105
    // Ingrese valores de lista 2: 10 24 6 33 48 105
    
    // Las listas no son iguales

**Puntajes**

Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los puntajes de cada ronda de un juego separados por espacio. Primero debe preguntarse el nombre de la jugadora 1, luego sus puntajes, luego el nombre de la jugadora 2, luego sus puntajes. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que tenga mayor puntaje en la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:

    // Ingrese nombre jugadora 1: Ada
    // Ingrese puntajes de Ada: 5 6 3 1 8
    
    // Ingrese nombre jugadora 2: Grace
    // Ingrese puntajes de Grace: 8 2 4 2 3
    
    // Resultado: 2 (Ada) vs 3 (Grace)
    // Ganadora: Grace

**Piedra, papel, tijera III**

Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los valores de la jugada en una ronda de "piedra, papel o tijera". Primero debe preguntarse el nombre de la jugadora 1, luego sus jugadas, luego el nombre de la jugadora 2, luego sus jugadas. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que gane la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:

    // Ingrese nombre jugadora 1: Ada
    // Ingrese jugadas de Ada: piedra papel papel piedra tijera
    
    // Ingrese nombre jugadora 2: Grace
    // Ingrese puntajes de Grace: papel piedra tijera tijera papel
    
    // Resultado: 3 (Ada) vs 2 (Grace)
    // Ganadora: Ada

**Recortar palabras**

Crear un programa que permita ingresar una lista de palabras separadas por espacios y que pregunta a cuántos caracteres se desea recortar las palabras. El programa debe devolver una lista con las palabras recortadas en esa cantidad de caracteres. Ejemplo:

    // Ingrese palabras: elefante sociedad chocolate avion america
    // Ingrese cantidad de caracteres permitidos: 4
    
    // Las palabras recortadas son: elef soci choc avion amer

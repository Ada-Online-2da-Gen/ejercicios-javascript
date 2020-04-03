# Creando un RPG (Role Playing Game) con Programación Orientada a Objetos
<br>

## Conceptos

### Encapsulamiento
### Herencia

Una clase puede "heredar" o "descender" de otra clase (o "extenderla"). Esto significa que si una clase B extiende de una clase A, B "hereda" todos los métodos y propiedades de A. Para eso se declara `class B extends A`. Por ejemplo:

```js
class Animal {
  constructor(habitat){
    this.habitat = habitat
  }
  comer = () => console.log("Nom nom nom")
}
class Conejo extends Animal { }

const conejo = new Conejo("pradera")
conejo.comer() // "Nom nom nom"
conejo.habitat // "pradera"
```
Si la clase heredada tiene más parámetros en su constructor que la clase de la que hereda, entonces hay que llamar a la función `super` dentro del constructor de la clase hija (debe ser lo primero que se haga) y pasarle los argumentos que corresponden a la clase de la que hereda:
```js
class Animal {
  constructor(habitat){
    this.habitat = habitat
  }
  comer = () => console.log("Nom nom nom")
}
class Conejo extends Animal { 
  constructor(habitat, color){
    super(habitat)
    this.color = color
  }
}
```

⚠️ Las propiedades y métodos privados no se heredan (sólo pueden ser accedidos en la clase donde se declaran)

### Abstracción 

- **Clase abstracta** es una clase que *no se puede instanciar* (no se puede llamar con `new`). Para lograrlo, en su constructor tenemos que chequear que quien lo esté llamando no sea la propia clase, de la siguiente forma
```js
class Abstracta {
  constructor() {
    if (this.constructor === Abstracta) {
      throw new ClaseNoInstanciableError(this)
    }
  }
}
```

- **Método abstracto** es un método que se encuentra en una clase y que no puede ser usado por una instancia de la misma, sino por una clase que descienda de esta y que sobrescriba dicho método. Nos sirve de plantilla para indicar que las clases que herende de dicha clase tienen que implementar dicho método. Para evitar que sea utilizado, podemos arrojar un error:
```js
class Animal {
  comer = () => throw new MetodoNoImplentadoError()
}
class Conejo extends Animal {
  comer = () => console.log("Nom nom nom")
}

const animal = new Animal() // OJO! Animal debería ser una clase abstracta, el ejemplo es solo a modo de ilustración
animal.comer() // Error

const conejo = new Conejo()
conejo.comer() // "Nom nom nom"
```
### Polimorfismo
<br>

## Buenas prácticas y consideraciones

### Principio de única responsabilidad

Una clase tiene que tener una única responsabilidad, es decir, encargarse de una única cosa. Cuando vemos que comienza a manejar más de la cuenta, o cosas que no le corresponde, hay que separarla en nuevas clases. Lo mismo aplica a métodos.

### Propiedades de clase

Cuando tenemos propiedades cuyo no depende de valores que se le pasan al constructor, podemos declararlo fuera de este, para una mayor legibilidad. Esto:
```js
class Ejemplo {
  constructor() {
    this.propiedadA = "a"
    this.propiedadB = "b"
    this.propiedadC = "c"
  }
}
```
es lo mismo que esto:
```js
class Ejemplo {
  propiedadA = "a"
  propiedadB = "b"
  propiedadC = "c"
}
```


### Errores personalizados 

Se puede extender la clase `Error` para tener errores custom y no tener que repetir siempre el mismo mensaje cada vez que generarmos un error del mismo tipo. Esto se hace de la siguiente forma:
```js
class CustomError extends Error {
  constructor(mensaje) {
    super()
    this.name = "CustomError"
    this.message = "Mensaje custom"
  }
}
```
y se usa arrojándolo:
```js
throw new CustomError()
```
Además, podemos pasarles otros parámetros para que el error sea más informativo. Algunos errores comunes que podemos tener son `ArgumentoInvalidoError`, `MetodoNoImplementadoError`, `ClaseNoInstanciableError`, etc.
- Podemos acceder al nombre de una clase con la propiedad `name`, por ejemplo, `Animal.name`

### Propiedades y métodos estáticos

Una propiedad o método estático no necesita tener una instancia para poder ser utilizado. Por ejemplo, cuando usamos `Math.random()`, no necesitamos crear una instancia de la clase `Math`.

Una propiedad estática tiene un valor fijo, no puede ser asignado dinámicamente (porque necesitaríamos una instancia para eso), ni manipulado. Es de **solo lectura**.

Un método estático no puede acceder a ninguna propiedad de la clase que no sea estática (porque se necesitaría una instancia para asignarlas).

En ambos casos, se usa la palabra reservada `static` antes de la propiedad o método:

```js
class Ejemplo {
  static propiedadPublicaEstatica
  static #propiedadPrivadaEstatica

  static metodoPublicoEstatico() {
    // ...
  }

  static #metodoPrivadoEstatico() {
    // ...
  }
}

Ejemplo.propiedadPublicaEstatica // no hace falta instanciar Ejemplo
Ejemplo.metodoPublicoEstatico() // no hace falta instanciar Ejemplo
```
Los métodos y propiedes estáticas son muy útiles en clases de tipo "helpers" o utilitarias.

<br>

## Consignas

### Pasos iniciales

1. Crear una clase **abstracta** `Criatura` con
    - nombre
    - vida
    - vidaMaxima
    - ataque
2. Crear la clase `Heroe` y la clase **abstracta** `Monstruo` y hacerlas descender de `Criatura`
3. Crear tres clases concretas `Orco`, `Goblin` y `Kobold` que desciendan de `Monstruo`, que en su constructor deben llamar a su clase ascendiente con valores específicos que necesita su constructor
4. Crear la clase `Juego` para manejar el flujo del juego:
    - debe tener una propiedad `historial` que es un array que inicializa vacío
    - toda acción que se realice debe agregar la información pertinente a `historial` e imprimir en consola, hacer un método para esto
    - debe tener una propiedad `monstruo` que representa el monstruo actual
    - debe tener un método `investigar` que genere un nuevo mostruo aleatorio y lo asigne a `monstruo`
    - debe tener un método `atacar` que permita atacar a `monstruo`
    - debe permitir `investigar` sólo si el monstruo actual no tiene vida
    - debe permitir `atacar` sólo si el monstruo actual tiene vida

### Siguientes pasos:

5. Crear una clase utilitaria `Random` con métodos **estáticos** para ayudar en toda la lógica de números aleatorios
6. Extraer la lógica de combate en una clase `Combate` y refactorizar el código
7. Agregarle a `Heroe` la propiedad `inventario`, que es un array que inicializa vacio
8. Crear una clase `Item` con `nombre` y el método `consumir`, dicho método debe tener como parámetro `objetivo` y debe sumarle 10 a la vida de dicho objetivo
9. Agregar a `Heroe` el método `consumirItem`, que tome como argumento un ítem y llame a su método `consumir` pasándose a sí mismo como argumento, luego debe eliminar dicho ítem de `inventario`
10. Agregar a `Juego` el método `consumirItem`, que llame al método `utilizar` de `Heroe`
11. Hacer que `investigar` tenga un probabilidad de encontrar un monstruo o una poción y agregarla a `inventario` de `Heroe`
13. Extraer la lógica de inventario en una clase `Inventario`, que permita agregar, utilizar y remover ítems, e imprimir una lista de ítems

// Tipos literales
// Podemos definir el tipo que acepta una variable

const nombre: string = 'Ada'
const edad: number = 33
const trabaja: boolean = false
const numeros: number[] = [1, 2, 3, 4]
const frutas: string[] = ['naranja', 'manzana']

// any es un tipo de datos, acepta cualquier cosa
let comida: any = 'papas'
const cosas: any[] = [1, true, 'sarasa']

// Podemos definir el tipo de dato de parámetros
const saludar = (nombre: string) => {
  console.log(`Hola ${nombre}`)
}

const agregarTodo = (todos: string[], nuevoTodo: string) => {
  todos.push(nuevoTodo)
}

// Podemos definir el tipo de dato que devuelve una función
const sumar = (a: number, b: number): number => {
  // lógica súper compleja
  return a + b
}

// Podemos definir un enum, un objeto de solo lectura, que puede ser usado como tipo
enum LENGUAJES {
  JAVASCRIPT = 0,
  PYTHON = 1,
  PHP,
  JAVA,
}

// Podemos definir tipos personalizados para usarlos donde requiramos un tipo

type LenguajeDeProgramacion = 'javascript' | 'python' | 'php' | 'java'

const lenguaje: LenguajeDeProgramacion = 'javascript'

const programar = (lenguaje: LenguajeDeProgramacion) => {
  console.log(`Estoy programando en ${lenguaje}`)
}

programar('javascript')
programar('python')

// Podemos hacer un tipo entero de solo lectura
type Animal = Readonly<{
  nombre: string
  especie: string
}>

// Podemos hacer un OR entre tipos (solo acepta las propiedades en común)
type SerViviente = Persona | Animal

type Direccion = {
  calle: string
  // podemos agregar propiedades opciones
  piso?: number
}

// Podemos hacer un AND entre tipos (tiene que tener todas las propiedades de todos los tipos)
type InfoPersonal = Persona & Direccion

const info: InfoPersonal = {
  nombre: 'Ada',
  edad: 33,
  calle: 'Sarasa',
}

console.log(info)

const ada: Persona = {
  nombre: 'Ada',
  edad: 33,
  lenguage: LENGUAJES.JAVASCRIPT,
}

// ada.nombre = 'sarasa'
ada.edad = 22

const juan = {
  nombre: 'Juan',
  edad: 33,
}

const gataDeLu: Animal = {
  nombre: 'Charlye',
  especie: 'gato',
}

// gataDeLu.nombre = 'michi'
// gataDeLu.nombre = 'perro'

const decirHola = (serViviente: SerViviente) => {
  console.log(`Chau ${serViviente.nombre}`)
}

decirHola(ada)
decirHola(gataDeLu)
// decirHola(3)

const despedir = (persona: Persona) => {
  console.log(`Chau ${persona.nombre}`)
}

despedir(ada)
despedir(juan)

// Genéricos

type Persona = {
  readonly nombre: string
  edad: number
  lenguage?: LENGUAJES
}

type Estudiante = {
  carrera: string
} & Persona

type Empleada = {
  empresa: string
} & Persona

type Jubilada = {
  pension: number
} & Persona

// type P = Persona | Estudiante | Empleada | Jubilada

// Genéricos
// Son como plantillas de TIPOS
// Aceptan un tipo X al que le podemos dar ciertas restricciones
// Como por ejemplo, que dicho tipo extienda cierto otro

const saludarPersona = <P extends Persona>(persona: P) => {
  console.log(`Hola ${persona.nombre}`)
}

// saludarPersona(gataDeLu)

const juana: Empleada = {
  nombre: 'Juana',
  edad: 43,
  empresa: 'Google',
}

saludarPersona(juana)

export default {}

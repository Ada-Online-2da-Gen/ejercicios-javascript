/**  recetas

 1. Preguntar por separado si tiene 5 ingredientes. 
   
  - Mostrar un confirm preguntando por un ingrediente y asignar el resultado a una variable
  - Hacer lo anterior 4 veces mas (por cada ingrediente)
  * Si la variable es true significa que tenemos el ingrediente

 2. Debe haber recetas con 5, 4, 3 y 2 ingredientes
  - Crear una variable con nombre de receta
  - Asignarle a dicha variable (receta) el resultado de evaluar si tenemos los ingredientes necesarios con las variables del paso 1 y utilizando && (porque necesitamos esos ingredientes)
  * Si la variable es true significa que podemos hacer la receta
  - Hacer lo mismo para recetas con 5 ingredientes, 4 ingredientes, etc

 3. Para cada cantidad, debe haber al menos 2 comidas/recetas posibles (excepto para la de 5)
  - Para cada cantidad del paso anterior generar otra receta siguiendo los mismos pasos
 
 4. Según los ingredientes que tenga, mostrar un mensaje con todas las comidas que puede cocinar.
  - Crear una variable que va a contener el texto de las recetas posibles 
  - Evaluar con un if si la variable receta es true
  - Si lo es, concantenar a la variable de recetas posible el nombre de la receta que puede hacerse
  - Hacer lo mismo para cada receta
  - Al final mostrar un alert con la variable de recetas posibles

 5. Si no hay ninguna que pueda hacerse también debe mostrarse un mensaje.
  - Crear una variable de si puede hacer recetas y chequear si al menos una variable de recetas es true (con ||, es decir si puede hacerse al menos una receta)
  - Al finalizar el chequeo de todas las recetas, chequear esta variable, si es true (usa if), mostrar el alert con la variable de recetas posibles
  - Si es false, mostrar un mensaje diciendo que no se puede cocinar nada
 */

const tieneHuevo = confirm('Tiene huevos?');
const tieneManteca = confirm('Tiene manteca?');
const tienePapa = confirm('Tiene papa?');
const tieneQueso = confirm('Tiene queso?');
const tieneCarne = confirm('Tiene carne?');

// 5 ingredientes
const superRejunte = tienePapa && tieneCarne && tieneHuevo && tieneManteca && tieneQueso;

// 4 ingredientes
const carneConPureYHuevo = tienePapa && tieneCarne && tieneHuevo && tieneManteca;
const carneConPureYQueso = tienePapa && tieneCarne && tieneManteca && tieneQueso;

// 3 ingredientes
const tortillaDePapa = tieneHuevo && tienePapa && tieneQueso;
const carneConPure = tienePapa && tieneCarne && tieneManteca;

// 2 ingredientes
const omelette = tieneHuevo && tieneQueso;
const pastelDePapa = tienePapa && tieneCarne;

const puedeRecetas =
  superRejunte || carneConPureYQueso || carneConPureYHuevo || tortillaDePapa || carneConPure || omelette || pastelDePapa;

let recetas = '';

if (superRejunte) {
  recetas += '- super rejunte\n';
}

if (carneConPureYHuevo) {
  recetas += '- carne con pure y huevo\n';
}

if (carneConPureYQueso) {
  recetas += '- carne con pure y quese\n';
}

if (carneConPure) {
  recetas += '- carne con pure\n';
}

if (tortillaDePapa) {
  recetas += '- tortilla de papa\n';
}

if (omelette) {
  recetas += '- omelette\n';
}

if (pastelDePapa) {
  recetas += '- pastel de papa\n';
} 

if (puedeRecetas) {
  alert(`Recetas que puede cocinar: 
  ${recetas}`);
} else {
  alert('Pida un delivery');
}

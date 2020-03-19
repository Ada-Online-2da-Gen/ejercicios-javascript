// * obtenerPromedioDeEstudiante, que tome por parámetro une estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias

// * cantidadDeEstudiantesPorCasa, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa (no debe contar amigues)

// * tenemos que mantener la cantidad?
// *    - SI -> MAP
// *    - NO -> FILTER / REDUCE
// *      - la cantidad se determina según una condición (filtros) -> FILTER
// *      - puede ser un elemento, cero o varios? -> FILTER
// *      - si es un elemento -> REDUCE

// * dado las materias de une estudiante, obtener todos sus promedios -> un array de numeros
// * sumar todos esos promedios -> un numero
// * dividir la suma por la cantidad de materias

const obtenerPromedioDeEstudiante = estudiante => {
  const aPromedio = materia => materia.promedio

  const sumaDePromedios = (sumaParcial, promedio) =>  sumaParcial + promedio

  return estudiante.materias
          .map(aPromedio)
          .reduce(sumaDePromedios) / estudiante.materias.length
}


const cantidadDeEstudiantesPorCasa = estudiantes => {
  const cantidadPorCasa = (cuentaParcial, estudiante) => {
      cuentaParcial[estudiante.casa] += cuentaParcial[estudiante.casa] + 1 || 1
      return cuentaParcial
  }

  // * lo que definimos como 2do parámetro, se pasa como 1er parámetro del callback de reduce

  return estudiantes.reduce(cantidadPorCasa, {})
}

console.log(cantidadDeEstudiantesPorCasa(estudiantes))



// * cantidadDeEstudiantesPorMateriaAprobada, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia (promedio superior a 6)

const aNombreDeMateria = materia => materia.nombre

const materiaAprobada = materia => materia.promedio > 6

const aMateriasAprobadas = (resultadoParcial, materia) => { // * string del nombre
  resultadoParcial[materia] = resultadoParcial[materia] + 1 || 1
  return resultadoParcial
}

const aprobadesPorMateria = (totalGeneralParcial, estudiante) =>  
  estudiante.materias           // obtenemos el array de materias
    .filter(materiaAprobada)    // filtramos las materias aprobadas
    .map(aNombreDeMateria)      // nos quedamos con un array con los 
                                // nombres de las materias
    .reduce(aMateriasAprobadas, totalGeneralParcial)

const cantidadDeEstudiantesPorMateriaAprobada = estudiantes => 
  estudiantes.reduce(aprobadesPorMateria, {}) // reduce el array de estudiantes a un objeto con materias y cantidad de aprobades -> RESULTADO FINAL


console.log(cantidadDeEstudiantesPorMateriaAprobada(estudiantes))

// {
//   Pociones: 38,
//   Encantamientos: 30,
//   Vuelo: 41,
//   Historia de la Magia: 37,
//   Transformaciones: 36,
//   Defensa Contra las Artes Oscuras: 38,
//   Herbología: 40,
//   Astronomía: 34
// }

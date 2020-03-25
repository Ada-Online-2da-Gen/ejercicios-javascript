# Array de objetos

## Empleades

Hacer las siguientes funciones:

1. `empleadesQueHacenGuardia`, que devuelva un array con todes les empleades que hacen guardia

2. `empleadesPorPais`, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país

3. `empleadesPorArea`, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicho área

4. `empleadesConSueldoMayorA`, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo

5. `empleadesConMasLenguajes`, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número

6. `sueldoPromedioEmpleades`, que devuelva el sueldo promedio de todos los empleados

7. `sueldoPromedioPorSeniority`, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority

8. `buscarEmpleades`, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority

9. `errorEnProduccion`, que ponga en true la propiedad haceGuardia de todos los empleados

10. `subirDeCategoria`, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo

11. `agregarTecnologias`, que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js"

12. `empleadeSabeLenguaje`, que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje

13. `empleadesQueSabenLenguaje`, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)

14. `empleadesQueSabenLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes

15. `empleadesQueSabenAlgunosLenguajes`, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes

16. `empleadesConMejorSueldo`, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort)

17. `obtenerTitulosCompletos`, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade (usar map)

18. `obtenerInfoPersonal`, que devuelva un array donde cada elemento es un objeto con las propiedades
    - nombre
    - pais
    - edad
    habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)

19. `obtenerInfoPuestos`, que devuelva un array donde cada elemento es un objeto con las propiedades
    - nombre
    - area
    - puesto
    - seniority
    habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)

20. `obtenerInfoSeniority`, que devuelva un array donde cada elemento es un objeto con las propiedades
    - nombre
    - seniority
    - sueldo
    - cantidadLenguajes
    habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe (usar map)

21. `obtenerInfoPagos`, que devuelva una array donde cada elemento es un objeto con las propiedades
    - nombre
    - sueldoBruto
    - obraSocial
    - jubilacion
    - sueldoNeto
    habiendo un elemento por cada empleade, donde
    - sueldoBruto es el sueldo del objeto original
    - obraSocial es el 3% del sueldoBruto
    - jubilacion es el 11% del sueldoBruto
    - sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion

22. `obtenerEstadisticasSeniority` que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad de empleades con dicho seniority

23. `obtenerEstadisticasLenguajes` que devuelva un objeto donde cada propiedad es un lenguaje y el valor la cantidad de empleades que saben dicho lenguaje




## Artistas

1. `artistasSolistas`, que tome por parámetro un array de artistas y devuelva un array con les artistas que sean solistas

2. `artistasPorEdad`, que tome un parámetro "edad" y un array de artistas y devuelva un array con les artistas que tengan dicha edad

3. `cantidadDeArtistasPorInstrumento`, que tome por parámetro un array de artistas y devuelva un objeto donde cada "instrumento" es una propiedad y su valor la cantidad de artistas que tocan dicho instrumento

4. `cantidadDeArtistasPorGenero`, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género" es una propiedad y su valor la cantidad de artistas de dicho género

5. `artistasConMasDiscosQue`, que tome por parámetro "cantidadDeDiscos" y un array de artistas y devuelva un array con les artistas que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos

6. `artistaConMasEntradasVendidas`, que tome por parámetro un array de artistas y devuelva el objeto artista que vendió más entradas en su último recital

7. `artistaConMayorRecaudacion`, que tome por parámetro un array de artistas y devuelva el objeto artista que más recaudó en su último recital (entradasVendidas * costoEntradas)

8. `artistasConDiscoEnAnio`, que tome por parámetro un parámetro "anio", y devuelva true un array con los artistas que tengan publicado al menos un disco en dicho año

9. `artistaConMasCopias`, que devuelva el objeto artista que más copias de discos en total vendió

## Estudiantes

Hacer las siguientes funciones:

1. `estudiantesPorHechizo`, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido

2. `estudiantesConMasAmiguesQue`, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro

3. `estudiantesConFamiliares`, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro

4. `obtenerPromedioDeEstudiante`, que tome por parámetro une estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias

5. `estudiantesConPromedioMayorA`, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)

6. `mejoresEstudiantesPorCasa`, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6

7. `casaConMejoresEstudiantes`, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)

8. `estudiantesPorMateriaAprobada`, que tome por parámetro el nombre de una materia y un array de estudiantes y devuelva una array con les estudiantes que tienen en dicha materia un promedio superior a 6

9. `obtenerInfoResumida`, que tome por parámetro un array de estudiantes y devuelva un array con objetos, habiendo un objeto por estudiante, donde cada objeto tiene las siguientes propiedades: `nombre`, `casa`, `promedio`, `amigues` (cantidad)

10. `cantidadDeEstudiantesPorCasa`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa (no debe contar amigues)

11. `cantidadDeEstudiantesPorMateriaAprobada`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia (promedio superior a 6)

12. `promedioPorMateria`, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y el promedio total de dicha materia entre todes les estudiantes (suma de todos los promedios divido la cantidad de estudiantes)

13. `familiarPreferido`, que tome por parámetro un array de estudiantes y devuelva el familiar que más estudiantes tienen

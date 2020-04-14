# Proyectos para hacer

## Corta duración

- Hacer un contador con las siguientes opciones: sumar/restar +1, sumar/restar +10, sumar/restar +100. El valor mínimo del contador es 0.
- Tweet: hacer un textarea que permita escribir hasta 240 caracteres. Debe haber un contador de caracteres restantes que se vaya actualizando, debe empezar con 240 e irse restando. También debe haber un botón de enviar que cuando se haga click en este borre el texto ingresado, reinicie el contador y muestre un alert que diga que fue enviado. Si el texto ingresado es más largo que el permitido, tanto el texto como el contador debe ponerse en color rojo, el contador debe pasar a números negativo y el botón debe cambiar de estilo y deshabilitarse (no poder clickearlo).
- Usando inputs de tipo `range`, crear 3 sliders que permitan seleccionar un color rgb (los números van del 0 al 255). Al cambiar de valor, debería: cambiarse el color de pantalla, mostrarse los valores actuales de cada slider, mostrarse el valor rgb final, por ejemplo:
  - R: 33
  - G: 44
  - B: 27
  - rgb(33,44,27)
  
  **BONUS POINT**: que permita cambiar a sistema HSL
- Permitir ingresar dos colores y una dirección, y cambiar el fondo con un gradiente usando dicha información. **BONUS POINT**: ver en la sección de Recursos del Trello algunos generadores de gradientes para agregar más funcionalidades/opciones
- Usando un input de tipo `date`, permitir seleccionar una fecha, y que el color de fondo y el texto que haya en la página cambien para indicar la estación del año de la fecha. **BONUS POINT**: que permita seleccionar el hemisferio en que estamos (norte o sur) y muestre la estación en relación a eso.
- Permitir ingresar una URL de una imagen, que cargue la imagen, y poder aplicarle distintos filtros (usando `filter` de CSS)
- Hacer una cuenta regresiva del 10 al 0. Por cada número, tiene que cambiar el color de fondo de pantalla. Investigar `setInterval`.
- Hacer que un elemento siga al cursor del mouse. **TIP**: la función que hace que el elemento vaya a la posición del mouse debería invocarse cada cierto intervalo de tiempo con `setInterval`.
- Hacer un semáforo que vayan cambiando por su cuenta de color.
- Una calculadora
- Un conversor de pesos, medidas y/o temperaturas. Se debería poder ingresar valor en un input (por ejemplo dólar) y que se actualicen los demás inputs (por ejemplo peso)
- Efecto scroll to o scrollear a: que al hacer click en un elemento, nos scrollee a otro elemento (sin saltar bruscamente)
- Autocomplete: dado una lista de strings, debería haber un input que a medida que vamos escribiendo, nos va mostrando los strings que coinciden (tienen substrings) con dicha búsqueda. Inicialmente se deben mostrar todos los strings. **BONUS POINT** cuando se está buscando y se muestran los resultados, resaltar dentro del string la parte que coincide con la búsqueda, por ejemplo:
  - BÚSQUEDA: ca
  - Resultados
      - **ca**ma
      - **ca**sa**ca**
      - hama**ca**
      
  **TIP**: usar span

## Medianos

- Hacer una función que permita crear gráficos de barra. **BONUS POINT**: Crear la interfaz para poder crear y manipular el gráfico de barra
- Hacer un cronómetro que tenga los controles: iniciar, pausar, finalizar vuelta, reiniciar.
  - iniciar arranca el contador sólo si está pausado
  - pausar detiene el contador
  - finalizar vuelta agrega una vuelta a una lista de vueltas, con su duración, la lista de vueltas también debe tener un promedio de vueltas, p. ej:
      - Vuelta 1: 30s
      - Vuelta 2: 27s
      - Vuelta 3: 35s
      - Promedio: 30.67s
  - reiniciar vuelve a 0 el contador y borra la lista de vueltas
- Lista de tareas: hacer un programa que permita
  - agregar tarea
  - borrar tarea
  - editar tarea
  - completar tarea
  - filtrar tarea (completadas, sin completar, todas)
- Controlador de gastos: hacer un programa que permita agregar ingresos y gastos, el programa debe mostrarlos de forma distinta (con colores que los diferencien) y mostrar el total hasta el momento (suma de ingresos menos suma de gastos). **BONUS POINT**: permitir ingresar una fecha a la hora de agregar ingreso o gasto, y permitir filtrar por mes/año.


## Complicados

- Juegos: hacer los juegos que ya hicimos con interfaz visual. En todos los casos, siempre se debe mostrar la información necesaria al jugador (puntos, movidas, turnos restantes, victoria, partidas hechas, etc) y permitir reiniciar o jugar un nuevo juego.  
  - viborita 
  - buscaminas
  - memoria
  - tres en linea
  - mente maestra
  - ahorcado
  - tateti
  - piedra papel tijera 
  - simón dice
- Ecommerce: dado un array de objetos con
  - nombre producto
  - precio
  - imagen (opcional)
  - categoría(s) (opcional)
  hacer un página de ecommerce que muestre dinámicamente dichos productos y que debería permitir
  - agregarlos al carrito
  - eliminarlos del carrito
  - cambiar la cantidad seleccionada
  - ordenarlos por precio y alfabéticamente (opcional)
  - filtrarlos por categoría (opcional)

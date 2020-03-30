## Programación orientada a objetos

Crear las siguientes clases con sus respectivos métodos y propiedades

## Calculadora
  - **Propiedades**
    - `resultado` (número), inicializa en 0
  - **Métodos**
    - **`sumar(numero)`**: suma *numero* a `resultado`, y actualiza `resultado` con el valor de dicha operación
    - **`restar(numero)`**: suma *numero* a `resultado`, y actualiza `resultado` con el valor de dicha operación
    - **`multiplicar(numero)`**: suma *numero* a `resultado`, y actualiza `resultado` con el valor de dicha operación
    - **`dividir(numero)`**: divide *resultado* por `numero`, y actualiza `resultado` con el valor de dicha operación
    - **`obtenerResultado()`**: devuelve `resultado`
    - **`reiniciar()`**: pone resultado en 0
  - **Observaciones**
    - arrojar un error cuando el argumento ingresado no sea un número, con `Number.isFinite()`
    - arrojar un error cuando se intenta dividir por 0
<br>

## Auto
  - **Propiedades**
    - `encendido` (booleano), inicializa en `false`
    - `velocidad` (número), inicializa en 0
    - `marca` (string)
    - `modelo` (número)
    - `patente` (string)
  - **Constructor**
    - pide como argumentos `marca`, `modelo`, `patente` y los asigna a sus respectivas propiedades
  - **Métodos**
    - **`arrancar()`** pone `encendido` en `true`
    - **`apagar()`** pone `encendido` en `false`
    - **`acelerar()`** suma 10 a `velocidad` y actualiza dicha propiedad
    - **`desacelerar()`** resta 10 a `velocidad` y actualiza dicha propiedad
    - **`toString()`** devuelve un *string* con la siguiente plantilla `${marca} ${modelo}, patente ${patente}`
  - **Observaciones**
    - sólo se puede acelerar o desacelerar si el auto se encuentra prendido
    - sólo se puede apagar el auto si la velocidad es 0
    - la velocidad mínima es 0
<br>

## Televisor
  - **Propiedades**
    - `encendido` (booleano), inicializa en `false`
    - `canal` (número), inicializa en 0
    - `canales` (número)
    - `volumen` (número), inicializa en 0
    - `marca` (string)
  - **Constructor**
    - pide como argumentos `marca`, `canales` y los asigna a sus respectivas propiedades
  - **Métodos**
    - **`prender()`** pone `encendido` en `true`
    - **`apagar()`** pone `encendido` en `false`
    - **`verCanalSiguiente()`** suma 1 a `canal` y actualiza dicha propiedad
    - **`verCanalAnterior()`** resta 1 a `canal` y actualiza dicha propiedad
    - **`cambiarCanal(canal)`** actualiza la propiedad `canal` con el valor del parámetro `canal`
    - **`subirVolumen()`** suma 1 a `volumen` y actualiza dicha propiedad
    - **`bajarVolumen()`** resta 1 a `volumen` y actualiza dicha propiedad
    - **`toString()`** devuelve un *string* como el siguiente ejemplo: 
    <br>

    ```
    Televisor Samsung
    - Canales: 100
    - Canal actual: 23
    - Volumen actual: 34
    ```
  - **Observaciones**
    - solo se puede modificar el canal y el volumen si el televisor se encuentra prendido
    - `canales` representa el máximo de canales posibles. Si se está en el canal máximo o mínimo (0), y se avanza o retrocede, debe dar toda la vuelta. P. ej.: si el canal máximo es 100, se está en el canal 100, y se avanza de canal, debe volver al 0
    - solo se puede cambiar a un canal que exista
    - el volumen mínimo es 0 y el máximo 100
<br>
        
## Anotador
  - **Propiedades**
    - `titulo` (string)
    - `notas` (array de strings)
  - **Constructor**
    - pide como argumento `titulo` y lo asigna a sus respectiva propiedad
    - inicializa `notas` con un array vacío
  - **Método**
    - **`agregarNota(nota)`** agrega `nota` al array de `notas`
    - **`actualizarNota(id, nota)`** actualiza el ítem con índice `id`, reemplazándolo por `nota`
    - **`obtenerNota(id)`** devuelve el ítem del array `notas` con índice `id`
    - **`eliminarNota(id)`** elimina de `notas` el ítem con índice `id`
    - **`eliminarNotas()`** borra todos los ítems de `notas`
    - **`listarNotas()`** devuelve un string con todas las notas y sus respectivos ids, por ejemplo
    <br>
    
    ```
    Cosas para hacer
    ------------------------
    1. Ir al súper
    2. Ver serie
    3. Programar
    4. Leer libro
    ```
<br>

    
## Celular
 
  - **Propiedades**
    - contactos (array de objetos), inicializa vacío
    - llamadas (array de strings), inicializa vacío
  - **Métodos**
    - **`agregarContacto(contacto)`** agrega `contacto` a `contactos`
    - **`buscarPorNombre(nombre)`** devuelve el contacto con dicho nombre en el array `contactos` o `undefined` si no lo encuentra
    - **`buscarPorNumero(numero)`** devuelve el contacto con dicho número en el array `contactos` o `undefined` si no lo encuentra
    - **`eliminarContacto(nombre)`**` elimina el contacto con nombre `nombre` de `contactos`
    - **`llamar(nombre)`** si existe un contacto con nombre `nombre` en la lista `contactos`, agrega a `llamadas` un string que representa un registro de la misma, usando la plantilla `Llamada a ${nombre} con número ${numero} realizada
    - **`verContactos()`** devuelve un string listando todos los contactos, con sus nombres y números
    - **`verHistorial()`** devuelve un string con la lista de llamadas realizadas
  - **Observaciones**
    - `contacto` es un objeto con las propiedades `nombre` y `numero`
    - no se puede agregar un contacto si ya existe en el celular alguno con el mismo nombre o número
    <br> 

## BilleteraVirtual

  - **Propiedades**
    - monto
    - operaciones (array de objetos), inicializa vacío
  - **Constructor**
    - toma como argumento `montoInicial` y lo asigna a `monto`
  - **Métodos**
    - **`agregarGasto(gasto)`** agrega `gasto` a operaciones
    - **`agregarGanancia(ganancia)`** agrega `ganancia` a operaciones
    - **`obtenerGastosPorMes(mes)`** devuelve un array con todos los gastos hechos en `mes`
    - **`obtenerGanaciasPorMes(mes)`** devuelve un array con todas los ganancias obtenidas en `mes`
    - **`obtenerGastosPorCategoria(categoria)`** devuelve un array con todos los gastos de cierta `categoria`
    - **`obtenerGanaciasPorCategoria(categoria)`** devuelve un array con todas las ganancias de cierta `categoria`
    - **`calcularTotalPorMes(mes)`** devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en un cierto `mes`
    - **`calcularTotalPorCategoria(categoria)`** devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en cierta `categoria
    - **`obtenerMonto()**` devuelve `monto`
  - **Observaciones**  
    - los objetos `gasto` y `ganancia` contiene las propiedades: 
      - `descripcion` (string)
      - `cantidad` (número)
      - `fecha` (Date) 
      - `categoria` (string)
    - cuando se agrega `gasto` o `ganancia` al array operaciones, hay que agregarle a dicha objeto la propiedad `tipo` con el valor `"GASTO"` o `"GANANCIA"` según corresponda, para poder identificarlos en las siguientes operaciones
    - cuando se devuelve un array con gastos o ganancias, hay que borrar de los objetos que se devuelven la propiedad `tipo`   

## CarritoCompras con Producto

## Agenda con Tareas

## Inmobiliaria con Alquileres

## Librería con Libros con Autor

## Chats con Usuarios y Mensajes

## Twitter con Tweets y Usuarios

## Banco con Usuarios y Transferencias

## Netflix con Series, Episodios y Usuarios

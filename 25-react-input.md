# Práctica con estados e inputs

## Form

Crear un component `Form` que
- renderice algunos `inputs` (3 o 4) y un `button` que diga "Enviar"
- al apretar enviar, debe chequear que los inputs no estén vacíos
- si alguno está vacío, debe mostrar un mensaje que diga "Por favor, complete todos los campos"
- si ninguno está vacío, debe mostrar un mensaje que diga "Gracias por completar el formulario, sus datos han sido guardados" y debe vaciar todos los campos

## CurrencyConverter

Crear un componente `CurrencyConverter` que
- renderice dos `inputs` de número con sus labels, uno representando la moneda en pesos y otro la moneda en dólares
- cuando se escriba algo en cualquiera de los inputs, el otro debe actualizar automáticamente a medida que se va escribiendo. Por ejemplo, si ingreso 1 en el input de dolares, el de pesos se debe actualizar a 65, y si ingreso 130 en el de pesos, el de dolares se debe actualizar a 2

**EXTRA:** agregar props para definir las monedas y el valor de cambio

## SearchList

Crear un componente `SearchList` que 
- renderice un `input` y una lista (`ul` con `li`)
- tome la prop `items`, que es un array de strings
- renderice cada item como `li` dentro del `ul` 
- a medida que se escribe en el input, actualice la lista mostrando los items que contengan como substring lo ingresado. (p. ej.: si se ingresa "java" debe mostrarse "javascript")
- la lista *al realizar la búsqueda* debe mostrarse ordenada alfabéticamente
- cuando el input está vacío, debe mostrar la lista normal con todos los ítems

**EXTRA:** si se ingresa algo en la búsqueda, resalta en cada ítem la substring ingresada, por ejemplo, si se ingresa java, javascript debería aparecer como: **java**script

## EditableText

Crear un componente `EditableText` que
- renderice un elemento `p` con texto
- toma una prop `defaultValue`
- el texto inicial del elemento `p` debe ser el de `defaultValue` tener un color gris
- cuando se hace click en el texto, se debe reemplazar el texto por un `input`, el `input` debe tener como placeholder el valor de `defaultValue`
- cuando se escribe algo en el `input` y se apreta enter, se debe reemplazar el `input` por el elemento `p` con el texto ingresado
- cuando se clickea nuevamente en el elemento `p`, el `input` debe mantener como valor el texto de `p` (el ingresado anteriormente)
- si se deja el `input` vacío, `p` debe mostrar como texto `defaultValue` 

## EditableList

Crear un componente `EditableList` que
- renderice un `input` y una lista (`ul` con `li`)
- cuando se escriba algo en el `input` y se aprete enter, se debe agregar un `li` al `ul` con el texto ingresado
- al apretar enter el `input` debe vaciarse
- si se hace click en un li, este debe eliminarse de la lista

## ScoreBoard

Crear un componente `## ScoreBoard` que renderice un `input` y una lista de `PlayerScore` que
- al escribir algo en el `input` y apretar "enter", agregue un nuevo `PlayerScore` a la lista
- si el `input` está vacío, no debe agregar nada
- cuando se apreta "enter", el `input` debe vaciarse
- `PlayerScore` contiene la prop `player` que toma un string, y se llena con el valor ingresado en el `input`
- `PlayerScore` renderiza un elemento `p` para mostrar el nombre (contenido en la prop `player`), un elemento `p` para mostrar el puntaje (que comienza en 0) y dos botones, uno para incrementar el puntaje y otro para disminuirlo

Ejemplo
```
[Ingrese un nuevo nombre...]

Jeff    100 puntos    [+][-]
Britta  50 puntos     [+][-]
Abed    500 puntos    [+][-]
Troy    200 puntos    [+][-]
Annie   250 puntos    [+][-]
Shirley 400 puntos    [+][-]
Pierce  20 puntos     [+][-]
```



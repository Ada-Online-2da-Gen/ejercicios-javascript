# React Context

**NOTA:** Pueden dar un poco de estilos a todo usando Styled Components.

## Usuario seleccionado

Crear la siguiente estructura de componentes:

```
App
  ControlUsuario
    DetalleUsuario
  ListaUsuarios
   Usuario
```

- No usar composición
- `Usuario` debe mostrar una card con solo nombre, apellido y compañía
- `DetalleUsuario` debe mostrar el resto de los datos del usuario
- Al hacer click en un `Usuario`, se debe actualizar `DetalleUsuario` con el usuario correspondiente
- Al seleccionar un `Usuario`, este debe cambiar de estilo para indicar que está seleccionado.

Obtener el JSON de los datos [acá](https://next.json-generator.com/Ey2ZwDVaO).

## Cards con detalles

Crear la siguiente estructura de componentes:

```
App
  ControlLista
    ControlVista
  ListaUsuarios
   Usuario
```   

- No usar composición
- `ControlVista` tiene un botón que switchea entre `Mostrar Detalles` o `Mostrar Resumen` cada vez que se lo clickea.
- `Usuario` es una card que tiene dos modos de presentación: uno resumido, donde sólo se muestra nombre, apellido y compañía, y otro con más detalles, donde se muestran todos los datos.
- Cuando se clickea el botón cuando este dice `Mostrar Resumen`, `Usuario` debe mostrarse en el modo resumido (y el botón cambiar de texto). Cuando se clickea el botón cuando dice `Mostrar Detalles`, `Usuario` debe mostrar todos los datos (y el botón cambiar de texto).

Para los datos, usar el JSON del ejercicio anterior.  

## Paginado

```
App
  ListaUsuarios
    Usuario
  ControlPaginado
    Paginado
```

- No usar composición
- `Usuario` debe mostrar una card con todos los datos del usuario.

### Versión corta

- `Paginado` debe mostrar 5 números del 1 al 5
- `ListaUsuarios` sólo muestra 10 usuarios a la vez
- Cuando se hace click en algún número del `Paginado`, se actualiza la lista mostrando los usuarios correspondientes (por ejemplo, si se clickea el número 2, debe mostrar los usuarios del 11 al 20.

### Versión Larga

- `ControlPaginado` además de `Paginado`, tiene un `input` donde podemos poner cuántos usuarios queremos que se muestren por página
- Al modificarlo, se tiene que actualizar `ListaUsuarios` y `Paginado`
- Por ejemplo, si se actualiza a 5 por página, `Paginado` tiene que mostrar 10 números, y si se selecciona el número 2, tiene que mostrar los usuarios del 6 al 10.
- Cuando se modifica el `input`, siempre vuelve a la página 1.
- Otra alternativa es en vez de usar un `input`, usar un `select` con valores definidos (5, 10, 15, 20, 25).

Obtener el JSON de los datos [acá](https://next.json-generator.com/EyTMhvV6O).


## Tags

```
App
  Sidebar
    TagControl
    Tags
  Filters
    SelectedTags
```

- `Tags` tiene una lista de componentes `Tag`. Cuando se clickea una `Tag`, esa tag se selecciona, cuando se la vuelve a clickear, se deselecciona. El estar seleccionada se representa con una diferencia visual (cualquiera: borde o color distinto, algún ícono, etc.)
- En `SelectedTags` aparecen *solo* las tags que están seleccionadas (ssando el componente `Tag`). Cuando se clickea una, esta se deselecciona, y por lo tanto desparece de `SelectedTags`.  
- `TagControl` tiene un texto mostrando la cantidad de tags seleccionadas y un botón `Clear`. Cuando se apreta `Clear`, se deseleccionan todas las tags.

El comportamiento de `Sidebar` lo pueden ver en acción [acá](https://uidesigndaily.com/) cuando cliquean en `Filter by tags`.

[Array de tags](https://uidesigndaily.com/api/v1/globals/tags).

**EXTRA 1:** Agregar en `Filters` un botón que muestre el `Sidebar` y en `Sidebar` un botón para ocultarlo (como en la página).  
**EXTRA 2:** Agrupar las tags por su primer letra, como en la página.

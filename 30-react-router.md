# React Router

## 1) Parámetro de ruta

Usando la API de Marvel, crear la siguientes rutas

|Ruta|Descripción
|---|---|
| `/characters`     |listado de personajes
| `/characters/:id` | info de personaje, con listado de comics en los que aparece
| `/comics`     |listado de personajes
| `/comics/:id` | info de comic, con listado de personajes que aparecen en este

- Agregar un header con links a lista de personajes y comics. Los links deben tener estilos cuando se está en una vista
- Agregar en vista de info de personaje y comic un botón para volver atrás

**EXTRA**

(hacer después de los demás ejercicios)

- Agregar un paginado a la listas, usando `query params`
- Agregar en un `aside`, a medida que se vaya visitando, la lista de los últimos 5 personajes y cómics visitados (por separado), y que se pueda clickear en ellos e ir a la vista de detalle correspondiente

**EXTRA EXTRA**

- Hay 3 entidades más, eventos, series e historias, las cuales están todas relacionadas entre sí. Se puede ir agregando estas entidades (al menos una) de la misma forma que las anteriores, mostrando un listado, y en el detalle agregar también la información de demás entidades (por ejemplo, si se agrega eventos, en personaje y comics tienen que aparecer eventos, y en evento tienen que aparecer personajes y comics). 
- Tratar de reutilizar la mayor cantidad de componentes posibles.

## 2) Rutas Anidadas

Crear una `aside` con una navegación con la siguiente estructura de rutas anidadas (usar listas anidadas):

```
- Sociedad
- Política
  - Nacional
  - Internacional
- Cultura
  - Cine
  - Música
  - Teatro
  - Museos
- Ciencia
  - Física
  - Astronomía
  - Medicina
- Deportes  
```

- Cada vista tiene que tener un título `h1` con el nombre de vista y algunos párrafos con `lorem ipsum`
- Cuando se selecciona una vista, el link tiene que quedar marcado con un estilo distinto en la navegación
- Cuando se selecciona una vista anidada, tienen que quedar marcadas ambos links (si se selecciona Museos, tiene que marcarse Cultura y Museos)
- Cuando se selecciona una vista anidada, tiene que mostrar la vista padre y la vista anidada (si se selecciona Museos, tiene que mostrarse Cultura y Museos)
- Las categorías principales tienen cada una su propia vista (`ScienceView`, `SportsView`, etc)
- Las subcategorías tienen una única vista (`SubcategoryView`)
- Las rutas anidadas tienen parámetros, no son harcodeadas, por ejemplo, todas las de cultura podrían ser algo como: `/cultura/:subcategoria`


## 3) Query Params

- Crear un listado de productos con filtros. 
- El estado de los filtros se tiene que manejar mediante **query param**.
- Los filtros son inclusivos (&&), es decir, si hay varios seleccionados, tienen que mostrarse aquellos productivos que cumplan con todas las condiciones
- Los productos se tienen que ir actualizando a medida que se van seleccionando filtros
- Los filtros de precios se activan al presionar la tecla enter
- Agregar un botón para limpiar filtros
- Al hacer click en un producto, se tiene que ir al detalle del producto, y mostrar en este el resto de la información (descripción e info de vendedor)
- En el detalle del producto tiene que haber un botón para volver atrás
- Las cards de los componentes tienen que mostrar visualmente si tienen envío gratis y/o descuento (con un ícono, alguna tag con color, etc)

Usar este [JSON de productos](https://next.json-generator.com/api/json/get/N1-jRJ1kY)

|Ruta|Descripción
|---|---|
| `/products`     |listado de productos
| `/products/:id`     |detalle de producto

**Filtros**:

|Variable|Nombres|Tipo de dato|Valores|Componente|
|---|---|---|---|---|
|hasDiscount|Con descuento|boolean|checkbox
|freeShiping|Envío gratis|boolean|checkbox
|category|Categoría|string|"Electrónica", "Cocina", "Muebles", "Dormitorio"|select
|minPrice|Precio mínimo|number|input
|maxPrice|Precio máximo|number|input

**EXTRA**

- Agregar para un select para sortear los componentes por precio de mayor a menor y viceversa, usando también query params


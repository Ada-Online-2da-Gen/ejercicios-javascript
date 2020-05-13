## Menu

Crear un componente especializado `Menu`.

- Debe renderizar un menú con ítems (un `ul` con `li` anidados)
- Los ítems deben poder anidarse dentro de `Menu`
- Cada ítem 
  - puede contener
    - un ícono a la izquierda
    - texto (principal)
    - texto o un componente a la derecha
  - puede estar activo
  - puede estar deshabilitado
- Puede contener submenús
  - puede contener un título con un ícono a la izquierda
  - pueden estar abiertos o cerrados
  - cuando está abierto debe mostrar una flecha hacia arriba como ícono a la derecha, cuando está cerrado una flecha hacia abajo
  - los íconos de apertura y cierra pueden ser configurables
  - los ítems puede anidarse dentro de submenú
- Puede contener divisores (`hr`)
- Cada componente debe permitir agregar clases y estilos customs, así como extender los props por defecto de React
- Exportar el componente principal con sus subcomponentes en un mismo archivo

### Ejemplo

![](https://developers.siberiancms.com/img/hooks/sidebar-menu.png)

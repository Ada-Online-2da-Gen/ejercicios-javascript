// React
import React from 'react'
// Librerías 3ros (npm)
// Componentes propios
import Article from 'components/Article/Article'
// Cosas extra - estilos / imágenes

/**
 * BUENAS PRACTICAS
 * - No utilizar componentes primitivos y componentes funcionales juntos
 * - Tener componentes atómicos que rendericen componentes primitivos
 * - No hardcodear contenido -> utilizar children o props para
 * - Poner buenos nombres: claros, explícitos y semánticos
 * - Componentes pequeños -> siempre que se pueda ir dividiendo los componentes grandes
 * - Favorecer la composición -> usando children
 * - Utilizar componentes específicos (variaciones) cuando sea necesario para evitar repetir código
 * - No utilizar estilos en línea a menos que sean estilos dinámicos
 * - Permitir (según el caso) agregar className y style custom mediante props
 * - Crear subcomponentes específicos de componentes -> CardFooter
 */

const Card = ({ children }) => {
  return <Article>{children}</Article>
}

export default Card

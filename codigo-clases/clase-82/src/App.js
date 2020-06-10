import React from 'react'
import Header from 'components/Header'
import Aside from 'components/Aside'
import { AppProvider } from 'contexts/AppContext'

/**
 * 1. importar createContext from react
 * 2. crear un contexto con createContext() y guardarlo en una variable MiContexto
 * 3. Utilizar MiContexto.Provider para envolver a aquellos componentes que deseen acceder a datos compartidos
 * 4. Definir en el Provider la prop value que va a ser lo que se va a compartir
 * 5. exportar el contexto
 * 6. en cada componente, importar el contexto
 * 7. usar useContext con el contexto importado como parámetro
 * 8. lo que devuelve useContext es el value que está declarado en el provider
 */

const App = () => {
  return (
    <AppProvider>
      <Header />
      <Aside />
    </AppProvider>
  )
}

export default App

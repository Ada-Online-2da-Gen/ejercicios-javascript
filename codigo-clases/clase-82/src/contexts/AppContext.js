import React, { useState, useContext, createContext } from 'react'

/**
 * Patrón de Contexto
 *
 * 1. Crear un componente funcional que sea NombreContextoProvider
 * 2. Este componente tiene que aceptar children
 * 3. Creamos un contexto
 * 4. El componente funcional devuelve el provider del contexto
 * 5. Ese provider debe incluir los children
 * 6. Dentro de NUESTRO componente, definimos toda la lógica, estados, valores y funciones que queremos que el provider comparta
 * 7. Definir el value (lo que comparte) el provider del contexto
 * 8. Exportar el contexto y nuestro componente
 */

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState('Todo App')

  return (
    <AppContext.Provider value={{ title, setTitle }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook
const useAppContext = () => useContext(AppContext)

export { AppProvider }
export default useAppContext

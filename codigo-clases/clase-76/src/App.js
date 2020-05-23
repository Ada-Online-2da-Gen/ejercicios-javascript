import React, { useState } from 'react'

// function App() {
//   const [text, setText] = useState('Hola React!')

//   const handleChange = (event) => setText(event.target.value)

//   const handleClick = () => setText('')

//   return (
//     <div className='App'>
//       <input value={text} onChange={handleChange} />
//       <button onClick={handleClick}>Borrar texto</button>
//       <h1>{text}</h1>
//     </div>
//   )
// }

const Input = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (event) => setValue(event.target.value)
  const handleKeyPress = (event) => event.charCode

  return (
    <>
      <label>{defaultValue}</label>
      <input
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder='Ingrese algo'
      />
    </>
  )
}

const App = () => {
  const [value, setValue] = useState('Hola React')

  const handleClick = () => setValue('')

  return (
    <>
      <Input defaultValue={value} />
      <button onClick={handleClick}>Borrar valor default</button>
    </>
  )
}

export default App

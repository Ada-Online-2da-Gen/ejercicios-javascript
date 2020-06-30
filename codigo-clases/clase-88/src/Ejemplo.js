import React, { useState, useEffect } from 'react'

// Cancellation token

const Bebida = () => {
  const [drink, setDrink] = useState(null)

  useEffect(() => {
    let isSubscribed = true

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        if (isSubscribed) {
          setDrink(data.drinks[0])
        }
      })

    // cleanup callback
    return () => (isSubscribed = false)
  }, [])

  return (
    drink && (
      <>
        <p>{drink.strInstructions}</p>
        <img src={drink.strDrinkThumb} alt='' />
      </>
    )
  )
}

const Ejemplo = () => {
  const [toggle, setToggle] = useState(true)

  const handleClick = () => setToggle(!toggle)

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {toggle && <Bebida />}
    </div>
  )
}

export default Ejemplo

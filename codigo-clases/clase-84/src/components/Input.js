import React, { useState } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 300px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`

const Input = ({ ...props }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => setValue(event.target.value)

  return <StyledInput value={value} onChange={handleChange} {...props} />
}

export default Input

const fonts = {
  primaryFont: 'Helvetica',
  // otras propiedades
}

const lightTheme = {
  textColor: 'black',
  backgroundColor: 'lightgray',
  ...fonts,
}

const darkTheme = {
  textColor: 'white',
  backgroundColor: 'black',
  ...fonts,
}

export { lightTheme, darkTheme }

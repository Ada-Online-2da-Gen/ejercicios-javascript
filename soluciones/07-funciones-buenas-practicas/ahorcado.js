const words = [
  'dinosaurio',
  'planeta',
  'elefante',
  'electricidad',
  'anillo',
  'guitarra'
]

const getRandomWord = words => {
  const random = Math.round(Math.random() * (words.length - 1))
  return words[random]
}

const hideWord = word => {
  let hiddenWord = ''
  for (let i = 0; i < word.length; i++) {
    hiddenWord += '*'
  }
  return hiddenWord
}

const showLetter = (letter, hiddenWord, word) => {
  let result = ''
  for (let i = 0; i < word.length; i++) {
    result += word[i] === letter ? word[i] : hiddenWord[i]
  }
  return result
}

const isLetter = str => str.length === 1

const hasLetter = (letter, word) => {
  return isLetter(letter) && word.includes(letter)
}

const word = getRandomWord(words)
const maxGuesses = 6

let hiddenWord = hideWord(word)
let isGameOver = false
let guesses = 0

while (!isGameOver) {
  const guess = prompt(`Palabra: ${hiddenWord}. 
Intentos restantes ${maxGuesses - guesses}.
Ingresá una letra o una palabra.`)

  const isDuplicated = hiddenWord.includes(guess)

  hiddenWord = isLetter(guess) ? showLetter(guess, hiddenWord, word) : guess

  isGameOver =
    guesses === maxGuesses - 1 || hiddenWord === word || !isLetter(guess)

  if (!isGameOver) {
    if (isDuplicated) {
      alert(`Ya ingresaste esa letra`)
      guesses++
    } else if (hasLetter(guess, word)) {
      alert(`¡Bien! Adivinaste una letra`)
    } else {
      alert(`¡Le erraste! ${guess} no está en la palabra`)
      guesses++
    }
  }
}

if (hiddenWord === word) {
  alert(`¡Ganaste! La palabra era "${word}".`)
} else {
  alert(`¡Perdiste! La palabra era "${word}"`)
}

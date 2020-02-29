mocha.setup("bdd") // Inicializar los test behaviour driven development
const expect = chai.expect // Abreviar expect

// TEST

// Suite de test (conjunto de tests para una unica cosa)
//  1er param es nombre de lo que se quiere testear
//  2do param es una funcion 

// Testeamos una función
describe("sumar()", () => {
  // Un test
  //  1er param es una descripcion del test
  //  2do param otra funcion
  it("deberia retornar la suma de dos números", () => {
    // No va nada de lógica (bucles, condicionales, operaciones)
    // Lo más reducido posible
    // Sólo una afimarción por test
    // UNIT TEST, o test unitarios 
    expect(sumar(2, 3)).to.equal(5)
    expect(sumar(4, 2)).to.equal(6)
  })

  it("deberia devolver NaN si le paso undefined como parámetro", () => {
    expect(sumar(2, undefined)).to.be.NaN
  })
})

describe("duplicarItems(items)", () => {
  it("debería devolver un array con los items duplicados", () => {
    const resultado = duplicarItems([3, 6, 112, 18])
    expect(resultado).to.be.eql([3, 3, 6, 6, 112, 112, 18, 18])
  })
  it("debería devolver un array con el doble de items que el pasado como argumento", () => {
    const items = [3, 6, 112, 18]
    const duplicados = duplicarItems(items)
    expect(duplicados).to.have.lengthOf(items.length * 2)
  })
})

describe("obtenerIndexRandom(items)", () => {
  it("debería devolver un índice al azar del array items", () => {
    const items = [3, 4, 5, 12]
    const indexRandom = obtenerIndexRandom(items)
    expect(indexRandom).to.be.within(0, items.length - 1)
  })
})

describe("aArray2d(items)", () => {
  it("debería devolver un array 2d de 2x2 dado un array de 4 items", () => {
    const resultado = aArray2d([2, 2, 5, 2])
    const esperado = [
      [2, 3],
      [5, 2]
    ]
    expect(resultado).to.be.eql(esperado)
  })
  it("debería devolver un array 2d de 4x4 dado un array de 16 items", () => {
    const resultado = aArray2d([2, 2, 5, 2])
    const esperado = [
      [2, 3],
      [5, 2]
    ]
    expect(resultado).to.be.eql(esperado)
  })
})

mocha.run() // Correr los test

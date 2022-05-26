const pilotos = ['Vettel', 'Jefferso', 'Maria', 'Joana']

pilotos.pop()
console.log(pilotos)

pilotos.push('vava')
console.log(pilotos)


pilotos.shift()
console.log(pilotos)

pilotos.unshift('putinha')
console.log(pilotos)

// splice adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'maria joana', 'é nada')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

// slice novo array
const novosPilotos = pilotos.slice(2)
console.log(novosPilotos)

const novosPilotos2 = pilotos.slice(1, 4)
console.log(novosPilotos2)




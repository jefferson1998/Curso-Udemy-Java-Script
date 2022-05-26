const  notas  = [7.7, 6.5, 8, 9, 3.0]

// sem calback
const notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


const  notasBaixas2 = notas.filter(nota => nota < 7)


console.log(notasBaixas)

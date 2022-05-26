const alunos = [
    {nome : 'João', nota: 7.2, bolsita: true},
    {nome : 'Maria', nota: 8.8, bolsita: true},
    {nome : 'JOé', nota: 6.2, bolsita: false},
]

const alunoBolsista = (resultado, bolsita) => resultado && bolsita
console.log(alunos.map(a => a.bolsita).reduce(alunoBolsista))

/*const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})*/
const algumBolsista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsita).reduce(algumBolsista))



//console.log(resultado)


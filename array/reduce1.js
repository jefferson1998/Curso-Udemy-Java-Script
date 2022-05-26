const alunos = [
    {nome : 'João', nota: 7.2, bolsita: true},
    {nome : 'Maria', nota: 8.8, bolsita: true},
    {nome : 'JOé', nota: 6.2, bolsita: false},
]

console.log(alunos.map(a  => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)
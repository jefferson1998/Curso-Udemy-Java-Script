const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'CADEIRA'
produto.preco = 200

console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 90000,
    proprietario: {
        nome: 'Ral',
        idade: 56,
        endereco: {
            logradouro: 'SAC',
            numero: 109
        }
    },
    calcularValorSeguro: function() {

    }
}
console.log(carro)
delete carro.proprietario.endereco.numero
console.log(carro)
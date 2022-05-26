const fs = require('fs')

const produto = {
    nome : "Celular",
    preco: 2.100,
    desconto: 0.10
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo')
})
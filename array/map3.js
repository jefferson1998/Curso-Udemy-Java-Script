Array.prototype.map2 = function(callback) {
    const array = []
    for(let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }
    return array
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lpais", "preco": 3.0}',
    '{"nome": "Caneta", "preco": 2.50}'
]

const convertJson = e => JSON.parse(e)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(convertJson).map2(apenasPreco)
console.log(resultado)
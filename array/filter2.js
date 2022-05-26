Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray

}

const produtos  = [
    { nome: 'Notebook', preco: 2400, fragil: true},
    { nome: 'Ipad', preco: 4500, fragil: true},
    { nome: 'Copo de plastico', preco: 13.90, fragil: false},
    { nome: 'Copo de Vidro', preco: 4, fragil: true},
]

/*console.log(produtos.filter(function(p) {
    return p.fragil === true && p.preco > 500
}))*/

const produtoCaro = produto => produto.preco > 500
const produtoFragil = produto => produto.fragil

console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))

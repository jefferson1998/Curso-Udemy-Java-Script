// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'quakquer', preco: 199, tag: 'promoção'
})
console.log('Extensivel: ', Object.isExtensible(produto))
produto.nome = 'borracha'
produto.descricao = 'teste'
delete produto.tag
console.log(produto)

const pessoa = {nome: 'maria', idade:35}
Object.seal(pessoa)
console.log('selador:', Object.isSealed(pessoa))

pessoa.sobrenome = 'safada'
delete pessoa.nome
pessoa.idade = 45
console.log(pessoa)

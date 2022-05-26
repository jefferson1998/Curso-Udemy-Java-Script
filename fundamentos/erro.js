function tratarErro(erro) {
    throw new Error ('ERRO')
}

function imprimirNomeGritado() {
    try {
        console.log(obj.name.toUpperCase() + '!!')

    } catch(e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)
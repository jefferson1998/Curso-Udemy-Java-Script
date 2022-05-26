class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(this.nome)
    }
}

const p1 = new Pessoa('josé')
p1.falar()

const ciarPessoa  = nome =>  {
    return {
        falar: ()  => console.log(nome)
    }
}

const p2 = ciarPessoa('jffersonn')
p2.falar()
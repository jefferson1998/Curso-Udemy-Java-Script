// Criar função de forma litoral
function fn1() {}

// Armazenar em uma variável
const fn2 = function () {}

// Armazenar em um array
const array = [function(a,b) {return a + b}]
console.log(array[0](2,3))

// Passar função como parametro
function run(fun) {
    fun()
}
run(function(){console.log('função dentro de função')})

// Uma função pode retornar/conter um função
function soma(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
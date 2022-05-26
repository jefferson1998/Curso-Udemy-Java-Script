const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcioarios)
    const apenasChinesEMulher = funcionarios => funcionarios.pais === 'China' && funcionarios.genero === 'F'
    const menorSalario = (funcionarios, funcionarioAtual) => {
        return funcionarios.salario < funcionarioAtual.salario ? funcionarios : funcionarioAtual
    }
    const resultado = funcionarios.filter(apenasChinesEMulher).reduce(menorSalario)
    console.log(resultado)
    //const apenasMulheres
    //const menorSalario
})



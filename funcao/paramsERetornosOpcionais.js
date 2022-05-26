function area(largura, altura) {
    const area = largura * altura
    if(area > 10) {
        console.log(`Valor acima do permitido ${area}`)
    } else {
        return area
    }
}
console.log(area(2,6))
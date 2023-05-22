// a função reduce reduz um vetor a um número

let vetor = [1, 2, 3, 4, 5]

let soma = vetor.reduce( (acumulador, elemento) => acumulador + elemento, 0)

console.log(soma)

let soma2 = vetor.reduce( (acumulador, elemento, posicao) => acumulador + elemento, 0)

console.log(soma)
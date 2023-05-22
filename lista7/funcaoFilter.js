
let vetor = [1, 2, 3, 4, 5]

// vetor2 vai conter elementos pares
// filter vai filtrar o vetor original e retornar um vetor menor
let vetor2 = vetor.filter( (elemento) => elemento % 2 == 0)
// filter vai filtrar o vetor original e retornar elementos na posição par
let vetor3 = vetor.filter( (elemento, posicao) => posicao % 2 == 0)


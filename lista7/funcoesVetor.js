
let vetor = []
vetor.push(1) // insere no final
vetor.push(2) // insere no final
vetor.push(3) // insere no final
vetor.push(4) // insere no final
vetor.push(5) // insere no final
console.log(vetor)

vetor.splice(2, 1) // remove 1 elemento a partir da posição 2
console.log(vetor)
vetor.splice(3, 1) // remove 1 elemento a partir da posição 3
console.log(vetor)

let vetor2 = [1, 2, 3, 4, 5]
// retorna vetor com elementos de 1 a 3
let novoVetor = vetor2.slice(1, 4) 
console.log(novoVetor)

let vetor3 = [1, 2, 3, 4, 5]
// 0 significa que não é para remover
// vamos adicionar o elemento 6 na posição 2
vetor3.splice(2, 0, 6) 
console.log(vetor3)


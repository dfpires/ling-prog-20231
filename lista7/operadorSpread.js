// é usado para espalhar os elementos de um vetor
// permite copiar elementos de um vetor para outro vetor de forma concisa
// uso do vetor
const vetor1 = [1, 2, 3]
const vetor2 = [4, 5, 6]
const novoVetor = [...vetor1, ...vetor2]
console.log(novoVetor)
// uso de objetos
const obj1 = {nome:'carlos', idade: 19}
const obj2 = {n1:5, n2:6, media: 5.5}
// vai copiar a estrutura chave-valor
const novoObjeto = {...obj1, ...obj2}
console.log(novoObjeto)
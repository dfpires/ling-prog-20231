// forEach para percorrer um vetor

const vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// vamos percorrer o vetor
vetor.forEach( (elemento ) => {
    console.log(elemento)
})
vetor.forEach( (elemento, posicao) => {
    posicao % 2 == 0 ? console.log(elemento) : null
})

vetor.forEach( (elemento) => {
    elemento % 2 == 0 ? console.log(elemento) : null
})

let cadastro = [
    {nome: 'andre', idade: 18, media: 6.5},
    {nome: 'pedro', idade: 19, media: 7.5},
    {nome: 'julino', idade: 20, media: 8.0}
]
let soma = 0
cadastro.forEach((objeto) => {
    soma = soma + objeto.media
})
console.log(`A média dos alunos é ${soma/cadastro.length}`) 
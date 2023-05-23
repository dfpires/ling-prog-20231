// vamos criar um dicionário do tipo chave-valor
// a partir da chave, obtemos o valor

let frutas = new Map([
    ["banana", 5],
    ["morango", 15],
    ["laranja", 10]
])

console.log(frutas.get("banana"))
console.log(frutas.get("laranja"))


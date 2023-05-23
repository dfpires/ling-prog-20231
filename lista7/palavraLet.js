// exemplo 1
{
    var peso = 45.9 // escopo global e local
    {
        let peso = 74.2 // escopo local
        console.log(peso) // 74.2
    }
    console.log(peso) // 45.9
}
// exemplo 2
if (true){
    var variavelVar = 'Eu sou uma variável var'
    let variavelLet = 'Eu sou uma variável let'
}
console.log(variavelVar)
console.log(variavelLet)

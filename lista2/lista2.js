function calcularExe1(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){
        document.getElementById("resultado").innerHTML = "Aprovado"
    }
    else {
        document.getElementById("resultado").innerHTML = "Reprovado"
    }
}
function calcularExe2(){
    // recupera os dados do html
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calcula a média
    let media = (nota1 + nota2) / 2
    let mensagem
    if ((media >= 0) && (media < 3)){
        mensagem = "Reprovado"
    }
    else if ((media >= 3) && (media < 7)){
        mensagem = "Exame"
    }
    else if ((media >= 7) && (media <= 10)){
        mensagem = "Aprovado"
    }
    else {
        mensagem = "Impossível informar"
    }
    // passa a resposta para o HTML
    document.getElementById("mensagem").innerHTML = mensagem
}
function calcularExe5(){
    // recupera os dados do html
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // executa a operação
    let resultado // tipagem é dinâmica
    switch(opcao){
        case 1: resultado = (nro1 + nro2) / 2
                break 
        case 2: if (nro1 >= nro2){
                    resultado = nro1 - nro2
                }
                else {
                    resultado = nro2 - nro1
                }
                break
        case 3: resultado = nro1 * nro2
                break
        case 4: if (nro2 != 0){
                    resultado = nro1 / nro2
                }
                else {
                    resultado = "Divisão por zero não pode"
                }
            break
        default: resultado = "Opção escolhida é inválida"
    }
    // devolve para HTML
    document.getElementById("resultado").innerHTML = resultado
}
function calcularExe22(){
    // recupera os dados do HTML
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let risco 
    if ((idade >= 0) && (idade < 20)) {
        if ((peso >= 0) && (peso < 60)){
            risco = 9
        }
        else  if ((peso >= 60) && (peso <= 90)){
            risco = 8
        }
        else if (peso >90){
            risco = 7
        }
        else risco =  "Peso inválido, não é possível calcular"
    }
    else if ((idade >= 20) && (idade <= 50)){
        if ((peso >= 0) && (peso < 60)){
            risco = 6
        }
        else  if ((peso >= 60) && (peso <= 90)){
            risco = 5
        }
        else if (peso >90){
            risco = 4
        }
        else risco =  "Peso inválido, não é possível calcular"
    }
    else if (idade > 50){
        if ((peso >= 0) && (peso < 60)){
            risco = 3
        }
        else  if ((peso >= 60) && (peso <= 90)){
            risco = 2
        }
        else if (peso >90){
            risco = 1
        }
        else risco =  "Peso inválido, não é possível calcular"
    }
    else {
        risco = "Idade inválida, não é possível calcular"
    }
    document.getElementById("risco").innerHTML = risco
}
function calcularExe23(){
    // recebe os valores do HTML
    let codigo = Number(document.getElementById("codigo").value)
    let qtde = Number(document.getElementById("qtde").value)
    // processamento
    let precoUnitario
    let precoTotal
    let desconto
    let precoFinal
    if ((codigo >= 1) && (codigo <= 10)){
        precoUnitario = 10
    }
    else if ((codigo >= 11) && (codigo <= 20)){
        precoUnitario = 15
    }
    else if ((codigo >= 21) && (codigo <= 30)){
        precoUnitario = 20
    } 
    else if ((codigo >= 31) && (codigo <= 40)){
        precoUnitario = 30
    }
    else precoUnitario = 0 // não vai calcular
    if (precoUnitario == 0){
        alert('O código é inválido')       
    }
    else {
        // calcula preço total
        precoTotal = qtde * precoUnitario
        // calcular desconto
        if (precoTotal < 250){
            desconto = precoTotal * 5/100
        }   
        else if ((precoTotal >= 250) && (precoTotal <= 500)){
            desconto = precoTotal * 10/100
        }
        else desconto = precoTotal * 15/100
        // calcula preço final
        precoFinal = precoTotal - desconto
        // devolve para o HTML
        document.getElementById("precoUnitario").innerHTML = `Preço unitário ${precoUnitario}`
        document.getElementById("precoTotal").innerHTML = `Preço total ${precoTotal}`
        document.getElementById("desconto").innerHTML = `Desconto ${desconto}`
        document.getElementById("precoFinal").innerHTML = `Preço Final ${precoFinal}`
    }
}
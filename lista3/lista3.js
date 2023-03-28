function exe2(){
    // não é preciso solicitar ou recuperar dados do usuário
    let ingresso = 5.0
    const despesa = 200
    let qtde = 120
    let lucro
    while (ingresso >= 1.0){
        lucro = (ingresso * qtde) - despesa
        document.getElementById("corpoTabela").innerHTML = document.getElementById("corpoTabela").innerHTML + `<tr> <td> ${ingresso} </td> <td> ${qtde} </td> <td> ${despesa} </td> <td> ${lucro} </td> </tr>`
        qtde += 26
        ingresso -= 0.50
    }
}

function exe3(){
    // estrutura de repetição para entrada de dados
    // e cálculo das faixas etárias
    let idade
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    for(let conta = 1; conta <= 8; conta++){
        idade = prompt(`Informe a idade ${conta}`)
        if ((idade >= 0) && (idade <= 15)){
            f1++
        }
        else if ((idade >= 16) && (idade <= 30)){
                f2++
        }
        else if ((idade >= 31) && (idade <= 45)){
                f3++
        } 
        else if ((idade >= 46) && (idade <= 60)){
                f4++
        }
        else if ((idade >= 61) && (idade <= 120)){
                f5++
        }
        else alert(`Idade inválida`)
    }
    // percentual da faixa 1
    let pf1 = f1 / 8 * 100
    // percentual da faixa 5
    let pf5 = f5 / 8 * 100
    // mostra resultado ao usuário
    alert(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5} %F1 ${pf1} %F5 ${pf5}`)
}

function exe4(){
    let numero = prompt(`Informe o número desejado`)    
    let saida = ""
    for(let conta = 0; conta <= 10; conta++){
        saida = saida + "\n " + `${numero} x ${conta} = ${numero * conta}`
    }   
    alert(saida)
}

function exe7(){
    // entrada de dados
    let idade, altura, peso
    let item1 = 0, item2 = 0, qtdeItem2 = 0, item3 = 0
    for (let conta = 1; conta<= 5;conta++){
        idade = Number(prompt(`Informe a idade ${conta}`))
        altura = Number(prompt(`Informe a altura ${conta}`))
        peso = Number(prompt(`Informe o peso ${conta}`))
        // calcular o item 1
        if (idade > 50){
            item1++ // item1 = item1 + 1
        }        
        // calcular o item 2
        if ((idade >= 10) && (idade <= 20)){
            item2 += altura // item2 = item2 + altura
            qtdeItem2++ // qtdeItem2 = qtdeItem2 + 1
        }
        if (peso < 40){
            item3++
        }
    }
    // mostra resultado
    document.getElementById("item1").innerHTML = "Qtde pessoas idade > 50 " + item1
    if (qtdeItem2 != 0){
        document.getElementById("item2").innerHTML = "Média alturas com idade entre 10 e 20 " + (item2/qtdeItem2).toFixed(2)
    }
    document.getElementById("item3").innerHTML = " % com peso < 40 " + item3/5*100 

}

function exe20(){
    let opcao
    do { // faça
        opcao = Number(prompt("Menu de opções \n 1. Média aritmética \n 2. Média ponderada \n 3. Sair"))
        switch(opcao){
            case 1: let nota1 = Number(prompt("Nota 1"))
                    let nota2 = Number(prompt("Nota 2"))
                    alert("Média aritmética " + (nota1 + nota2) / 2)
                    break
            case 2: let nota1p = Number(prompt("Nota 1"))
                    let peso1 = Number(prompt("Peso da Nota 1"))
                    let nota2p = Number(prompt("Nota 2"))
                    let peso2 = Number(prompt("Peso da Nota 2"))
                    let nota3p = Number(prompt("Nota 3"))
                    let peso3 = Number(prompt("Peso da Nota 3"))
                    alert("Média ponderada " + ((nota1p*peso1) + (nota2p*peso2) + (nota3p * peso3)) / (peso1 + peso2 + peso3))
                    break
            case 3: alert("Opção 3 selecionada, programa será encerrado")
                    break
            default: alert("Opção inválida")
        }
    }
    while (opcao != 3) // enquanto
}
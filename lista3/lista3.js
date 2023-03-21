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



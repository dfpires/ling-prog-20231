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

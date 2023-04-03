function exemplo1(){
    let valores = 0
    let soma = 0
    for(let conta=1;conta<= 5; conta++){
        // desvantagem: perco os valores anteriores
        valores = Number(prompt(`Informe o valor ${conta}`))
        soma += valores 
    }
    console.log(`A média dos 5 valores é ${soma/5}`)
}
function exemplo2(){
    let valor1 = 0, valor2 = 0, valor3 = 0, valor4 = 0, valor5 = 0
    let soma = 0
    for(let conta=1;conta<= 5; conta++){
        // desvantagem: imaginemos que serão 30 valores
        let aux = Number(prompt(`Informe o valor ${conta}`))
        switch(conta){
            case 1: valor1 = aux; soma += valor1; break
            case 2: valor2 = aux; soma += valor2; break
            case 3: valor3 = aux; soma += valor3; break
            case 4: valor4 = aux; soma += valor4; break
            case 5: valor5 = aux; soma += valor5; break
        }
    }
    console.log(`A média dos 5 valores é ${soma/5}`)   
}
function exemplo3(){
    let valores = [] // declaração do vetor
    // entrada de dados
    for(let i=0;i<5;i++){
        valores[i] = Number(prompt(`Informe o valor ${i+1}`))
    }
    // processamento dos dados
    let soma = 0
    for(let i=0;i<5;i++){
        soma += valores[i] 
    }
    console.log(`A média dos valores é ${soma/5}`)
}
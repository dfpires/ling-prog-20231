function exe1() {
    let vetor = []
    // entrada de dados
    for (let i = 0; i < 6; i++) {
        vetor.push(Number(prompt(`Informe o elemento ${i + 1}`)))
    }
    // separar em pares e ímpares
    let pares = []; let impares = []
    for (let i = 0; i < 6; i++) {
        if (vetor[i] % 2 == 0) { // par
            pares.push(vetor[i]) // insere no vetor de pares
        }
        else {
            impares.push(vetor[i]) // insere no vetor de ímpares
        }
    }
    console.log(`Qtde de pares ${pares.length} - ${pares}`)
    console.log(`Qtde de ímpares ${impares.length} - ${impares}`)
}

function exe2(){
    // leitura de dados do vetor
    let vetor = []
    for(let i=0;i<7;i++){
        vetor.push(Number(prompt(`Informe o elemento ${i+1}`)))
    }
    // percorre para copiar os elementos de vetor para os vetores corretos
    let mult2 = []; let mult3 = []; let mult23 = []
    for(let i=0;i<7;i++){
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)){
            mult23.push(vetor[i])
        }
        else if ((vetor[i] % 2 == 0)){
            mult2.push(vetor[i])
        }
        else if ((vetor[i] % 3 == 0)){
            mult3.push(vetor[i])
        }
    }
    console.log(`Múltiplos de 2 e de 3: ${mult23}`)
    console.log(`Múltiplos de 2: ${mult2}`)
    console.log(`Múltiplos de 3: ${mult3}`)
}

function exe3(){
    // entrada de dados
    let codigos = []
    let estoque = []
    for(let i=0; i < 10;i++){
        codigos.push(prompt(`Informe o código do produto ${i+1}`))
        estoque.push(Number(prompt(`Informe a qtde do produto ${i+1}`)))
    }
    let cliente = Number(prompt(`Informe código do cliente`))
    do {
        let codigo = prompt(`Informe código do produto para compra`)
        // percorrer o vetor codigos para ver se existe
        for(let i=0;i<10;i++){
            if (codigo == codigos[i]){
                // achou o produto
                let qtde = Number(prompt(`Informe qtde da compra`))
                if (qtde <= estoque[i]){
                    // qtde suficiente
                    estoque[i] = estoque[i] - qtde // atualizei
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert(`Estoque insuficiente, permitido ${estoque[i]}`)
                }
                break // sai do for sem incrementar o i - já encontrou o produto
            }
        }
        if (i == 10){ // valor em que saiu do for
            alert(`Produto não existe`)
        }
        cliente = Number(prompt(`Informe código do cliente. Digite 0 para encerrar`))
    }
    while(cliente != 0)
}
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
    
}
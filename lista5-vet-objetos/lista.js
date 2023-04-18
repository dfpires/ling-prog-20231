function exe2(){
    // entrada de dados
    let vetor = []
    for(let i=0;i<4;i++){
        // cria o objeto contendo dados do usuário
        let obj = {
            salario: Number(prompt('Informe salário')),
            idade: Number(prompt('Informe idade')),
            filhos: Number(prompt('Informe número de filhos')),
            sexo: prompt('Informe M ou F').toUpperCase()
        }
        // insere o objeto no vetor
        vetor.push(obj) // objeto inserido
    }
    let somaSalario = 0 
    let somaFilhos = 0
    let maiorSalario = vetor[0].salario
    let contaF = 0; let contaFS = 0
    for(let i=0;i<4;i++){
        // soma dos salários
        somaSalario = somaSalario + vetor[i].salario       
        somaFilhos = somaFilhos + vetor[i].filhos       
        if (vetor[i].salario > maiorSalario){
            maiorSalario = vetor[i].salario
        }
        if (vetor[i].sexo == 'F'){
            contaF++ // conta as mulheres
            if (vetor[i].salario > 1000){ // salário < 1000
                contaFS++
            }
        }
    }
    console.log(`A média de salário é ${somaSalario/vetor.length}`)
    console.log(`A média de filhos é ${somaFilhos/vetor.length}`)
    console.log(`Maior salário ${maiorSalario}`)
    console.log(`% de mulheres salário > 1000 ${contaFS/contaF*100}`)
}
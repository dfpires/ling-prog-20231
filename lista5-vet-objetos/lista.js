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
function exe3(){
    let vetor = []
    for(let i=0;i<3;i++){
        let obj = {
            sexo: prompt("Informe sexo: M ou F").toUpperCase(),
            altura: Number(prompt("Informe altura")),
            idade: Number(prompt("Informe idade")),
            olhos: prompt("Informe cor dos olhos: A, V ou C").toUpperCase()
        }
        vetor.push(obj)
    }
    let somaIdade = 0; let contaIdade = 0
    let maiorIdade = vetor[0].idade; let qtde = 0; let qtdeM = 0
    for(let i=0;i<3;i++){
        if ((vetor[i].olhos == 'C') && (vetor[i].altura > 1.60)){
            somaIdade += vetor[i].idade
            contaIdade++
        }
        if (vetor[i].idade > maiorIdade){
            maiorIdade = vetor[i].idade
        }
        if (((vetor[i].sexo == 'F') && (vetor[i].idade >= 20) && (vetor[i].idade <= 45)) 
               || ((vetor[i].olhos = 'V') && vetor[i].altura < 1.70)) {
                qtde++
        }
        if (vetor[i].sexo == 'M'){
            qtdeM++
        }
    }
    alert(`A média de idades é ${somaIdade/contaIdade}`)
    alert(`A maior idade é ${maiorIdade}`); alert(`A qtde é ${qtde}`)
    alert(`% de homens ${qtdeM/vetor.length*100}`)
}
function exe6(){
    let opcao
    let clientes = []; let contas = [];
    do{
        opcao = Number(prompt(`Digite 1. Criar cliente \n 2. Criar conta \n 3. Listar contas \n 4. Sair`))
        switch(opcao){
            case 1: let objCliente = {
                        numero: clientes.length, // código do cliente é incremental
                        nome: prompt('Nome do cliente'),
                        telefone: prompt('Telefone do cliente'),
                        endereco: prompt('Endereço do cliente')
                    }
                    clientes.push(objCliente)
                    break
            case 2: let objConta = {
                        numero: contas.length,
                        nroCliente: Number(prompt('Informe número do cliente')),
                        saldo: Number(prompt('Saldo da conta'))
                    }
                    // verifica se o cliente existe
                    let achou = false
                    for(let i=0;i<clientes.length;i++){
                        if (objConta.nroCliente == clientes[i].numero){
                            contas.push(objConta)
                            achou = true // encontrou
                        }
                    }
                    if (!achou){ // não encontrou o cliente
                        let objCliente = {
                            numero: clientes.length, // código do cliente é incremental
                            nome: prompt('Nome do cliente'),
                            telefone: prompt('Telefone do cliente'),
                            endereco: prompt('Endereço do cliente')
                        }
                        clientes.push(objCliente)
                        contas.push(objConta)
                    }
                    break
            }
    }
    while (opcao != 4)
}

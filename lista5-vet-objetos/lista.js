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

function cadastraCliente(clientes){
    let objCliente = {
        numero: prompt('Número do cliente'), // código do cliente é incremental
        nome: prompt('Nome do cliente'),
        telefone: prompt('Telefone do cliente'),
        endereco: prompt('Endereço do cliente')
    }
    clientes.push(objCliente)
}
function cadastraConta(contas, clientes){
    let objConta = {
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
            numero: objConta.nroCliente, // código do cliente é incremental
            nome: prompt('Nome do cliente'),
            telefone: prompt('Telefone do cliente'),
            endereco: prompt('Endereço do cliente')
        }
        clientes.push(objCliente)
        contas.push(objConta)
    }
}

function listaContas(contas){
    let tabelaContas = ""
    for(let i=0;i<contas.length;i++){
        tabelaContas = tabelaContas + `<tr><td> ${contas[i].numero} </td> <td> ${contas[i].nroCliente} </td> <td> ${contas[i].saldo} </td> </tr>` 
    }
    document.getElementById("tabelaContas").innerHTML = tabelaContas
}

function listaClientes(clientes){
    let tabelaClientes = ""
    for(let i=0;i<clientes.length;i++){
        tabelaClientes = tabelaClientes + `<tr><td> ${clientes[i].numero} </td> <td> ${clientes[i].nome} </td> <td> ${clientes[i].telefone} </td> <td> ${clientes[i].endereco} </td></tr>` 
    }
    document.getElementById("tabelaClientes").innerHTML = tabelaClientes
}
function exe6(){
    let opcao
    let clientes = []; let contas = [];
    do{
        opcao = Number(prompt(`Digite \n 1. Criar cliente \n 2. Criar conta \n 3. Listar contas \n 4. Listas clientes \n 5. Sair`))
        switch(opcao){
            case 1: cadastraCliente(clientes)
                    break
            case 2: cadastraConta(contas, clientes)
                    break
            case 3: listaContas(contas)
                    break
            case 4: listaClientes(clientes)
                    break
            }
    }
    while (opcao != 5)
}

function coleta(habits){
    for(let i=0;i<3;i++){
        let obj = {
            idade: Number(prompt('Informe idade do habitante')),
            sexo: prompt('Informe M ou F para o sexo do habitante').toUpperCase(),
            renda: Number(prompt('Informe a renda familiar')),
            filhos: Number(prompt('Informe o número de filhos'))
        }
        habits.push(obj)
    }
}
function mediaSalario(habits){
    let soma = 0
    for(let i=0;i<3;i++){
        soma += habits[i].renda
    }
    return soma/3
}

function menorMaiorIdade(habits){
    let menorIdade = habits[0].idade
    let maiorIdade = habits[0].idade
    for(let i=0;i<3;i++){
        if (habits[i].idade < menorIdade){
            menorIdade = habits[i].idade
        }
        if (habits[i].idade > maiorIdade){
            maiorIdade = habits[i].idade
        }
    }
    console.log(`A menor idade é ${menorIdade} e a maior idade é ${maiorIdade}`)
}

function mulheres(habits){
    let qtde = 0
    for(let i=0;i<3;i++){
        if ((habits[i].sexo == 'F') && (habits[i].renda < 600) && (habits[i].filhos > 2)){
            qtde++
        }
    }
    //console.log(`A quantidade é ${qtde}`)
    return qtde 
}
function exe4(){
    let habits = []
    coleta(habits)
    let media = mediaSalario(habits)
    console.log(`A média da renda é ${media}`)
    menorMaiorIdade(habits)
    console.log(`A qtde de mulheres é ${mulheres(habits)}`)
}
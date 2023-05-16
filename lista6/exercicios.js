function exe1(){
    let mat = []
    // entrada de dados
    for(let i=0;i<3;i++){
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe elemento da posição ${i+1} x ${j+1}`))
        }
    }
    // calcula qtde de número entre 15 e 20
    let qtde = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if ((mat[i][j] >= 15) && (mat[i][j] <= 20)){
                qtde++
            }
        }
    }
    // mostra o resultado
    alert(`A qtde de número entre 15 e 20 é ${qtde}`)
}

function exe2(){
    let mat = []
    for(let i=0;i<2;i++){
        mat[i] = []
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe elemento da posição ${i+1} x ${j+1}`))
        }
    }
    // calcula qtde entre 12 e 20 por linha
    let vet = []
    let soma = 0
    let contaPares = 0
    for(let i=0;i<2;i++){
        vet[i] = 0
        for(let j=0;j<4;j++){
            if ((mat[i][j] >= 12) && (mat[i][j] <= 20)){
                vet[i]++
            }
            if (mat[i][j] % 2 == 0){
                soma += mat[i][j]
                contaPares++
            }
        }
    }
    alert(vet)
    alert(soma/contaPares)
}
function exe3(){
    let mat = [] // cria a matriz
    // LEITURA DA MATRIZ
    for(let i=0;i<6;i++){
        mat[i] = [] // cria um vetor dentro da matriz
        for(let j=0;j<3;j++){
            mat[i][j] = Number(prompt(`Informe o elemento da posição ${i+1} ${j+1}`))
        }
    }
    // calcula o maior e menor números
    let maior = mat[0][0]; let lmaior = 0; let cmaior = 0;
    let menor = mat[0][0]; let lmenor = 0; let cmenor = 0;
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if (mat[i][j] > maior) {
                maior = mat[i][j]; lmaior = i; cmaior = j
            }
            if (mat[i][j] < menor) {
                menor = mat[i][j]; lmenor = i; cmenor = j
            }
        }
    }
    alert(`Maior: ${maior} na posição ${lmaior + 1} x ${cmaior + 1}`)
    alert(`Menor: ${menor} na posição ${lmenor + 1} x ${cmenor + 1}`)
}

function exe4(){
    let mat = [] // matriz de notas
    let vet = [] // vetor de nomes
    for(let i=0;i<10;i++){ // para cada aluno
        mat[i] = []
        vet[i] = prompt(`Informe o nome do aluno ${i+1}`)
        for(let j=0;j<5;j++){ // para cada nota
            mat[i][j] = Number(prompt(`Informe a nota ${j+1} do aluno ${vet[i]}`))
        }   
    }
    let somaMedia = 0
    for(let i=0;i<10;i++){ // para cada aluno
        let soma = 0 
        for(let j=0;j<5;j++){ // para cada nota
            soma += mat[i][j]
        }
        let media = soma / mat[i].length
        somaMedia += media
        let situacao
        if (media >= 6){
            situacao = "aprovado"
        }
        else if (media >= 3){
            situacao = "exame"
        }
        else situacao = "reprovado"
        alert(`Aluno ${vet[i]} com média ${media} foi ${situacao}`)
    }
    alert(`Média da turma ${somaMedia/vet.length}`)
}

function exe5Cadastra(mat, meses){
    for(let i=0;i<12;i++){
        mat[i] = [] // aloca espaço na memória para cada vetor da matriz
        alert(`Informe as vendas do mês ${meses[i]}`)
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Valor vendido na semana ${j+1}`))
        }
    }
}
function exe5TotalMes(mat, meses){
    let totalMes = []
    let saida = ''
    for(let i=0;i<12;i++){
        totalMes[i] = 0
        for(let j=0;j<4;j++){
            totalMes[i] = totalMes[i] + mat[i][j]
        }
        saida = saida + `\n ${meses[i]} - ${totalMes[i]}`
    }
    alert(saida)
}
function exe5TotalSemana(mat){
    let totalSemana = []
    let saida = ''
    for(let j=0;j<4;j++){
        totalSemana[j] = 0
        for(let i=0;i<12;i++){
            totalSemana[j] = totalSemana[j] + mat[i][j]
        }
        saida = saida + `Semana ${i} vendeu ${totalSemana[i]}`
    }
    alert(saida)
}
function exe5Total(mat){
    let total = 0
    for(let i=0;i<12;i++){
        for(let j=0;j<4;j++){
            total += mat[i][j]
        }
    }
    alert(`Total vendido ${total}`)
}
function exe5(){
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    let mat = []
    // passagem de parâmetro é por referência
    // a função chamada, quando altera o parâmetro, afeta a variável da função que chamou
    exe5Cadastra(mat, meses) 
    exe5TotalMes(mat, meses)
    exe5TotalSemana(mat)
    exe5Total(mat)
}


function somaLinhaColuna(M, N){
    let O = []
    for(let i=0;i<M.length;i++){
        O[i] = []
        for(let j=0;j<M[i].length;j++){
            O[i][j] = M[i][j] + N[j][i]
        }
    }
    mostraMatriz(O)
}
function exe7(){
    let M = []
    let N = []
    preencheMatriz(M, 4, 6)
    preencheMatriz(N, 6, 4)
    mostraMatriz(M)
    mostraMatriz(N)
    somaLinhaColuna(M, N)
}

function mostraMatriz(matriz){
    let saida
    for(let i=0;i<matriz.length;i++){
        saida = ''
        for(let j=0;j<matriz[i].length;j++){
            saida = saida + " " + matriz[i][j]
        }
        console.log(saida)
    }
    console.log('\n')
}

function preencheMatriz(matriz, linhas, colunas){
    for(let i=0;i<linhas;i++){
        matriz[i] = []
        for(let j=0;j<colunas;j++){
            matriz[i][j] = parseInt(Math.random() * 10)
        }
    }
}

function diagonalPrincipal(matriz){
    let soma =0
    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
            if (i == j){
                soma += matriz[i][j]
            }
        }
    }
    console.log(`Soma da DP é ${soma}`)
}

function diagonalSecundaria(matriz){
    let soma =0
    for(let i=0;i<matriz.length;i++){
        let aux = matriz[i].length - i - 1
        console.log(`${i} x ${aux} `)
        soma += matriz[i][aux]
    }
    console.log(`Soma da DS é ${soma}`)
}
function exe10(){
    let matriz = []
    preencheMatriz(matriz, 5, 5)
    mostraMatriz(matriz)
    diagonalPrincipal(matriz)
    diagonalSecundaria(matriz)
}
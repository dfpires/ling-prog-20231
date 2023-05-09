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
function prova(){
    // exemplo de criação de objeto
    let pc = new Object()
    pc.modelo = "i7 8GB 256 SSD"
    pc.qtde = 10
    pc.classificacao = "Gamer"
    console.log(pc)

    // exemplo de criação de objeto
    let pc2 = {
        modelo: "i7 8GB 256 SSD",
        qtde: 10,
        classificacao: "Gamer"
    }
    console.log(pc2)

    // exemplo de criação de objeto
    let pc3 = {
        modelo: prompt(`Informe modelo do pc`),
        qtde: Number(prompt(`Informe qtde do pc`)),
        classificacao: prompt("Informe classificação do pc")
    }
    console.log(pc3)

    // exemplo de um vetor de objetos
    let vet = []
    for(let i=0;i<3;i++){
        let obj = {
            modelo: prompt(`Informe modelo do pc`),
            qtde: Number(prompt(`Informe qtde do pc`)),
            classificacao: prompt("Informe classificação do pc: 1. Gamer, 2. Notebook e 3. Desktop")
        }
        while (obj.qtde < 0){
            obj.qtde = Number(prompt(`Informe qtde do pc`))
        }
        vet.push(obj) // insere objeto no vetor
    }
    for(let i=0;i<4;i++){
        let modelo = prompt('Informe modelo da compra')
        let qtde = Number(prompt('Informe qtde da compra'))
        let classif = prompt(`Informe qtde do pc`)
        // procura modelo
        let j
        for(j=0;j<vet.length;j++){
            if ((vet[j].modelo == modelo) && (vet[j].classificacao == classif)){
                if (vet[j].qtde >= qtde){
                    vet[j] = vet[j] - qtde // compra ok
                }
                else {
                    alert('Estoque insuficiente')
                }
                break // sai do for
            }
        }
        if (j == vet.length){ // percorreu todo o vetor e não encontrou
            alert('Produto não encontrado')
        }
    }
}
function calcular(){
    // recupera os dados do HTML
    let peso
    peso = document.getElementById("peso").value
    let altura
    altura = document.getElementById("altura").value
    // calcula o IMC
    let imc
    imc = peso / (altura * altura)
    alert("O seu imc é " + imc.toFixed(2))    
}
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

    if (imc < 18.5){
        alert('Magreza')
    }
    else if ((imc >= 18.5) && (imc <= 24.9)){
        alert('Normal')
    }
    else if ((imc >= 25) && (imc <= 29.9)){
        alert('Sobrepeso')
    }
    else if (imc <= 39.9){
        alert('Obesidade 1')
    }
    else {
        alert('Obesidade 2')
    }
}
function calcularExe1(){
    // recupera dados do formulário
    let nro1 = document.getElementById("nro1").value
    let nro2 = document.getElementById("nro2").value
    // processamento
    let subtracao = nro1 - nro2
    // saída dos dados
    document.getElementById("subtracao").innerHTML = "O resultado é " + subtracao
}
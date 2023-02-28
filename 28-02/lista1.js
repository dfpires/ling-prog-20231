function calcularExe1(){

    // JAVASCRIPT É UMA LINGUAGEM COM TIPAGEM DINÂMICA
    //let idade = 10; idade = "dez"
    
    // recupera dados do formulário
    let nro1 = document.getElementById("nro1").value;
    let nro2 = document.getElementById("nro2").value;
    // processamento
    let subtracao = nro1 - nro2;
    // saída dos dados
    document.getElementById("subtracao").innerHTML = "O resultado é " + subtracao;
}
function calcularExe2(){
    // recupera o peso do html
    let peso = Number(document.getElementById("peso").value)
    // calcular quando engorda
    let engorda = peso + peso*15/100
    // calcular quando emagrece
    let emagrece = peso - peso*20/100
    // devolve o resultado para html
    document.getElementById("engorda").innerHTML = "Quando engorda " + engorda
    document.getElementById("emagrece").innerHTML = "Quando emagrece " + emagrece
}
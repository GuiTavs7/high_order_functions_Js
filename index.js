// 1) CALLBACK) PASSANDO FUNÇÕES COMO PARÂMETROS / ARGUMENTOS

const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){

    const mesAtual = 2;
    let anoDeNascimento = 2024 - idade;
    if (mesDeNascimento > mesAtual) anoDeNascimento--;

    imprimir(anoDeNascimento);

    console.log(anoDeNascimento);
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log("Seu ano de nascimento é: " + anoDeNascimento);
}

calcularAnoDeNascimento(33, 3, imprimirAnoDeNascimento); // 1990

calcularAnoDeNascimento(21, 2, imprimirAnoDeNascimento); //2003

// 2) FUNÇÕES QUE RETORNAM OUTRAS FUNÇÕES!

/* EXEMPLO REPETITIVO

function dobrar(numero){
    return numero * 2;
}

function triplicar(numero){
    return numero * 3;
}

function quadruplicar(numero){
    return numero * 4;
}

console.log(dobrar(2)) // 4;

NÃO É NECESSÁRIO CRIAR SUCESSIVAS FUNÇÕES PARA TRIPLICAR, QUADRUPLICAR E ASSIM POR DIANTE!

*/

// VERSÃO CLEAN CODE USANDO HIGH ORDER FUNCTIONS!

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador;
    }
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar);
console.log(dobrar(3));
console.log(triplicar(3));
console.log(quadruplicar(3));
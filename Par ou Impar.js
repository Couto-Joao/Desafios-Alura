//Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

function imparOuPar(numero) {
    if(numero % 2 == 0) {
        return `O número é par.`;
    } else if (numero % 2 == 1){
        return `O número é ímpar.`;
    }
}

let numero = 4;
alert(imparOuPar(numero));
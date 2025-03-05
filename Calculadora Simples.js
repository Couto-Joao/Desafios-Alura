//Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão.
//Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

let escolha = prompt('Digite qual função deseja executar: 1- Soma | 2- Subtração | 3- Multiplicação');

if(escolha == '1') {
    soma();
} else if(escolha == '2') {
    subtracao();
} else if(escolha == '3') {
    multiplicacao();
}

function soma() {
    let numero1 = Number(prompt('Digite um número: '));
    let numero2 = Number(prompt('Digite outro número: '));

    let soma = numero1 + numero2;

    alert(`A soma dos números é: ${soma}.`);
}

function subtracao() {
    let a = Number(prompt('Digite um número: '));
    let b = Number(prompt('Digite outro número: '));

    let sub = a - b;

    alert(`A subtração dos números é: ${sub}.`);
}

function multiplicacao() {
    let x = Number(prompt('Digite um número: '));
    let y = Number(prompt('Digite outro número: '));

    let multi = x * y;

    alert(`A multiplicação dos números é: ${multi}.`);
}
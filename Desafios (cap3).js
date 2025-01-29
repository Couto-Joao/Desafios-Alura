//1-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
let altura = 1.75;
let peso = 60;

function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    console.log(parseInt(imc));
}
calcularIMC(altura, peso);

//2-Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let numero = 6;

function calculoValorFatorial(numero) {
    let valorFatorial = numero * 5 * 4 * 3 * 2 * 1;
    console.log(valorFatorial);
}
calculoValorFatorial(numero);

//3-Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let dolar = 20;
let cotacaoDolar = 4.80;

function converterDolar(dolar) {
    return console.log(parseInt(dolar * cotacaoDolar));
}
 converterDolar(dolar);

 //4-Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
 let alturaSala = 10;
 let larguraSala = 42;

 function perimetroSala(alturaSala, larguraSala) {
    let perimetro = (alturaSala * 2) + (larguraSala * 2);
    alert(`O perímetro da sala retangular é de ${perimetro}`);
 }
 perimetroSala(alturaSala, larguraSala);

 //5-Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
 let raio = 6;
 let pi = 3.14;

 function medidasSalaCircular(raio) {
    let perimetroSala = parseInt((raio * 2) * pi);
    let areaSala = parseInt(pi * (raio * raio));
    alert(`O perímetro da sala circular é ${perimetroSala} e a área é ${areaSala}`);
 }
 medidasSalaCircular(raio);

 //6-Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
 let multiplicador = 1;
 let numeroTabuada = 5;

 function tabuada(numeroTabuada) {
    while(multiplicador < 11) {
        let resultado = numeroTabuada * multiplicador;
        alert(`${numeroTabuada} x ${multiplicador} = ${resultado}`);
        multiplicador++;
    }
 }
 tabuada(numeroTabuada);
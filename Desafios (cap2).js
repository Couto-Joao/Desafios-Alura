//1-Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log("Olá, Mundo!");
}
olaMundo();

//2-Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = "João Pedro";
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
saudacao(nome);

//3-Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let numero = 5;
function dobroDoNumero(numero) {
    return console.log(numero * 2);
}
dobroDoNumero(numero);

//4-Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
let media = calcularMedia(10, 5, 2);
console.log(media);

//5-Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(a, b) {
    return a > b ? a : b;
}
let numeroMaior = maiorNumero(5, 15);
console.log(numeroMaior);

//6-Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function resultadoCalculo(a) {
    return a * a;
}
let multiplicacao = resultadoCalculo(5);
console.log(multiplicacao);
//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = prompt("Digite um número:");
let contador = numero;

while(contador >= -1){
    console.log(`Contagem Regressiva ${contador}`);
    contador--
}
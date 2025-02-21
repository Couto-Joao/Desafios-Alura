//Crie um programa que verifica se uma palavra ou frase é um palíndromo.
function verificarPalindromo() {
    let palavra = prompt('Digite uma palavra para verificar se é um palíndromo ou não.');
    let letrasSeparadas = palavra.split('');
    let palavraInvertida = letrasSeparadas.reverse();
    palavraInvertida = palavraInvertida.join('');

    if(palavra == palavraInvertida) {
        alert(`A palavra ${palavra} é um palíndromo!`);
    } else {
        alert(`A palavra ${palavra} não é um palíndromo.`);
    }
}
verificarPalindromo();
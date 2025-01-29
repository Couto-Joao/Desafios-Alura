//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let arma = prompt('Escolha uma arma: (espada) (graveto)');
let pontuacao = 0
if(arma == 'espada'){
    alert('Você escolheu uma espada e derrotou o monstro, ganhando 120 pontos!!')
    pontuacao = pontuacao + 120
}if(arma == 'graveto'){
    alert('Você machuca muito o monstro mas seu graveto quebra e o monstro te captura, ganhando somente 50 pontos. :(')
    pontuacao = pontuacao + 50
}if(pontuacao >= 100){
    alert('Parabéns, você venceu!!!')
}else{
    alert('Tente novamente para ganhar.')
}

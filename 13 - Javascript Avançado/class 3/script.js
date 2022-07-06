/*

ARROW FUNCTIONS


ES6


As funções de seta nos permitem escrever uma sintaxe de 
função mais curta 

*/
//RETURN IMPLÍCITO:
//const teste =  (paramet1, paramet2) => paramet1 + paramet2


const soma =  (paramet1, paramet2) => {
    return paramet1 + paramet2
}

const resultado = soma(1, 2)

console.log(resultado)

//Quando há apenas um parametro pode-se remover os parenteses
const teste = paramet1 => paramet1

console.log(teste('ok'))


const botao = document.querySelector('#botao')
botao.onclick = () => {
    console.log(this)
}
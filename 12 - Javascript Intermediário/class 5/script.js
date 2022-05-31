
let botaoTeste = document.querySelector('#botaoTeste')

let contador = 0

function clickBotao(){
    contador ++
    if(contador>=5){
        botaoTeste.removeEventListener('click', clickBotao)
    }
    
    console.log('mensagem 1')
    
}

//addEventListener
botaoTeste.addEventListener('click', clickBotao)

/*botaoTeste.addEventListener('click', function(){
    console.log('mensagem 2')
})
*/
//onclick

//botaoTeste.onclick = clickBotao

//removeEventListened
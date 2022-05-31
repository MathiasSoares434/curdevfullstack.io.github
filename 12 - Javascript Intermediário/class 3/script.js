//Seletor por id
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'
//Seletor por tag
document.querySelector('a').innerText = '<b>TESTE 1</b>'



//SELECIONANDO MAIS DE UM ITEM POR TAG
//(ForEach serve para usar apenas em array)
let ancora = document.querySelectorAll('a')

ancora.forEach(function(elemento){//função anônima/call back
elemento.innerHTML = 'MAIOR DO NORDESTE'
})
//SELECIONANDO MAIS DE UM ITEM POR CLASSE

let boxes = document.querySelectorAll('.box')
let count = ''
boxes.forEach(function(classe, index){
    count ++

    
    classe.innerHTML = 'Sport Clube do Recife ' + (index + 1)
})



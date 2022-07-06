/*
    DESTRUCTURING ASSIGMENT (DESUSTRUTURAÇÃO DE ATRIBUIÇÃO)
*/



function transformarEmJson(response){
    return response.json()
}

function exibirNaTela(dados){
    console.log(dados)
}

function exibirErro(){
    console.log('ops deu erro')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

const configs = {
    method: 'GET',
    Headers: {}
}

botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao(){    
        const dados = await fetch('https://jsonplaceholder.typicode.com/users/1', configs)
        .then(transformarEmJson)
        .catch(exibirErro)
        
        const {name, email, phone} = dados
        console.log(name, email, phone)
}

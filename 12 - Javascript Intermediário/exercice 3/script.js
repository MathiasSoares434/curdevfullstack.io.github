const bairros = {

    ol: ['Bultrins', 'Amparo', 'Fragoso', 'Tabajara'],

    re: ['Centro', 'Afogados', 'Curado', 'Boa Viagem']
}

const formulario = document.querySelector('#formCadastro')
const selectCidades = document.querySelector('#select-cidades')
const selectBairros = document.querySelector('#select-bairros')
const divBairros = document.querySelector('#div-bairro')

selectCidades.onchange = function(e){
    const cidade = e.target.value
    let listaBairros 

    if (cidade === 'ol') {
        listaBairros = bairros.ol
    }
    if(cidade === 're'){
        listaBairros = bairros.re
    }

    let htmlBairros = `<option value=''>--Selecione o Bairro--</option>`

    for(bairro of listaBairros ){
        htmlBairros +=  `<option value='${bairro}'>${bairro}</option>`
    }
    selectBairros.innerHTML = htmlBairros
    divBairros.classList.add('visible')
}

    formulario.onsubmit = function(e){
    e.preventDefault()

    let temErro = false

    let selectCidades = document.forms['formulario']['cidade']
    let selectBairros = document.forms['formulario']['bairro']

    if(!selectCidades.value){
        temErro = true
        selectCidades.classList.add('inputError')
        
        let span = selectCidades.nextSibling.nextSibling
        span.innerText = 'Selecione a Cidade'
    }else{
        selectCidades.classList.remove('inputError')
        
        let span = selectCidades.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!selectBairros.value){
        temErro = true
        selectBairros.classList.add('inputError')
        
        let span = selectBairros.nextSibling.nextSibling
        span.innerText = 'Selecione o Bairro'
    }else{
        selectBairros.classList.remove('inputError')
        
        let span = selectBairros.nextSibling.nextSibling
        span.innerText = ''
    }    
    
    if(!temErro){
        formulario.submit()
    }
}



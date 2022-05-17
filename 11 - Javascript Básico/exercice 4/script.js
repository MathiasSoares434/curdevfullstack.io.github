function entrar(){

let inPutNome = prompt ('Digite seu nome')

let inPutIdade = prompt ('Digite sua idade')

let idade = parseInt(inPutIdade)

let maiorOuMenor

if (idade>=18) {
    maiorOuMenor = 'maior'
}else if (idade<18){
    maiorOuMenor = 'menor'
}

let especial = ""

if(inPutNome === 'Thomas Anderson' || inPutNome === 'thomas anderson'){
    especial = 'Você é um personagem do filme The Matrix'
}

if(inPutIdade === '' || inPutNome === ''){
    alert('Preencha os dados corretamente')
    return  
}

let mensagem = `Olá ${inPutNome} você é ${maiorOuMenor} de idade!!`

document.querySelector ('#main').innerHTML = mensagem

document.querySelector('#special').innerHTML = especial
}
















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

if(inPutNome = 'Thomas Anderson'){
    especial = 'Você é um personagem do filme The Matrix'
}

let mensagem = `Olá ${inPutNome} você é ${maiorOuMenor} de idade!!, ${especial}`
document.write(mensagem)











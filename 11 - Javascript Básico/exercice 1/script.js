

let inPutNome = prompt ('Digite seu nome')

let inPutIdade = prompt ('Digite sua idade')

let idade = parseInt(inPutIdade)

let maiorOuMenor

if (idade>=18) {
    maiorOuMenor = 'maior'
}else if (idade<18){
    maiorOuMenor = 'menor'
}
let mensagem = `Olá ${inPutNome} você é ${maiorOuMenor} de idade`

document.write(mensagem)





let inputNota1 = prompt('Digite sua primeira nota')
let inputNota2 = prompt('Digite sua segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7
let media = (nota1 + nota2) / 2

console.log(media)

if(media>=mediaMinima){
    document.write('Good Job!!!!')
}
else if(media<mediaMinima){
    document.write('Shame on you')
}

document.write('<br>')

if(media>=mediaMinima && media === 10){
    document.write('Perfect!!')
}else if(media>=mediaMinima && media === 9){
    document.write('Excellent, going the hard work')
}


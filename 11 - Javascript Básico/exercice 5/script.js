let inputTabuada = prompt('Digite a tabuada desejada')

let tabuada = parseInt(inputTabuada)

for(let contador = 1; contador <=10; contador ++){
    let resolução = tabuada + contador
    
    let mensagem = `${tabuada} + ${contador} = ${resolução} <br>`

    document.write(mensagem)
}
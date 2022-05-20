function media(){
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number (window.prompt(`Qual foi sua primeira nota ${nome}?`))
    let n2 = Number (window.prompt(`Qual foi sua segunda nota ${nome}?`))
    media = (n1 + n2)/2

    let msg 

    if(media >= 6){
        msg = `Parabéns ${nome}`
        
    }else{
        msg = `<br>Precisa melhorar ${nome}`
    }

    let conclusao = document.getElementById('content')
    conclusao.innerHTML = `<p> Calculando a média final de <mark>${nome}/<mark>.`
    conclusao.innerHTML = `As notas foram <mark>${n1} e ${n2}/<mark>`
    conclusao.innerHTML = `A mensagem que temos é: <strong>${msg}/<strong>`
}





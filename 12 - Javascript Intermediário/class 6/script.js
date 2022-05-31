
let quadrado = document.querySelector('.quadrado')


function minhaFunçao(evento){
    console.log(evento.key)
}

//quadrado.onclick = minhaFunçao

//quadrado.onmousemove = minhaFunçao

//quadrado.onmouseenter = minhaFunçao

//quadrado.onmouseout = minhaFunçao

//window.addEventListener('resize', minhaFunçao)

window.addEventListener('keypress', minhaFunçao)
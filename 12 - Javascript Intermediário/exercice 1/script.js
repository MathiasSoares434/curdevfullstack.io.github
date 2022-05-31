let counter = 0

const counterHtml = document.querySelector('#counter')
const lessJs = document.querySelector('#less')
const moreJs = document.querySelector('#more')

lessJs.onclick = function(){
    counter --
    counterHtml.innerText = counter

}
moreJs.onclick = function(){
    counter ++

    counterHtml.innerText = counter
    
}



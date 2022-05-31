let counter = 0
const counterHtml = document.querySelector('#counter')
const lessJs = document.querySelector('#less')
const moreJs = document.querySelector('#more')

let increment

lessJs.onclick = function(){
    clearInterval(increment)
   lessJs.classList.add('vermelho')
   moreJs.classList.remove('verde')
   
    increment = setInterval(function(){
        counter --
        counterHtml.innerText = counter
    }, 700)


   
}
moreJs.onclick = function(){
    clearInterval(increment)  
    lessJs.classList.remove('vermelho')
    moreJs.classList.add('verde')
    increment = setInterval(function(){
        counter ++
        counterHtml.innerText = counter
    }, 700)


}
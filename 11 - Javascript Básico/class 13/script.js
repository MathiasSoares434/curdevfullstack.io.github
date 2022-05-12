let clientes = [
    {
        nome: 'Mathias',
        idade: 24,
        linguagens: ['Javascript', 'pyton', 'php']
    },
    {
        nome: 'Hernane',
        idade: 53,
        linguagens: ['C#', 'C++', 'C']  
    },
    {
        nome: 'Bakana',
        idade: 20,
        linguagens: ['go', 'power', 'gg']  
    }
]
let htmlClientes = ''

for(let cliente of clientes){
    
    let listaLinguagens = ''
    for(let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }
    
    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens:</b><br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `

}

document.querySelector('#listaClientes').innerHTML = htmlClientes
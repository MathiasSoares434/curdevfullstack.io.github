const clientes = [
    {name: 'Fulano', lastname: 'Da Silva'},
    {name: 'Ciclano', lastname: 'Santos'},
    {name: 'Beltrano', lastname: 'Moreira'}
]


// ['Fulano Da Silva', 'Ciclano Santos']


let clientesFinal = []
clientes.forEach(function(clientes){
    clientesFinal.push(`${clientes.name} ${clientes.lastname}`)
})

console.log(clientesFinal)


//MAP  METÓDO QUE SERVE PRA PERCORRER ARRAYS  E MONTAR ARRAYS
//OBS: NO MAP EU SÓ CONSIGO MEXER NO ARRAY
const clientesFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clientesFinalMap)













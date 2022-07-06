const clientes = [
    {name: 'Fulano', lastname: 'Da Silva', age: 14},
    {name: 'Ciclano', lastname: 'Santos', age: 33},
    {name: 'Beltrano', lastname: 'Moreira', age: 21}
]

const clientesMaiores = clientes.filter (cliente =>cliente.age >= 18 
    /*let retorno = false
    if(cliente.age >= 18){
        retorno = true
    }
    return retorno
    */
    
    //? true:false
) 

console.log(clientesMaiores)













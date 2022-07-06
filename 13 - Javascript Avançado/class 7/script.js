/*

JSON


JAVASCRIPT OBJECT NOTATION


XML

*/


const objeto = {
    nome: 'fulano',
    idade: 23
}

// OU:
const json = JSON.stringify(objeto)

console.log(JSON.stringify(objeto))

console.log(json)

const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)










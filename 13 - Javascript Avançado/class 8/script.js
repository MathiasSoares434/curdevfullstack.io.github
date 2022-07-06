/*

LOCAL STORAGE

*/

localStorage.setItem('tarefa', 'estudar javascript')

const tarefas = [
    { tarefa: 'estudar js'},
    {tarefa: 'estudar node.js'},
    {tarefa: 'estudar react.js'}

]
const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefas', tarefasJson)


const listaTarefasSalvas = localStorage.getItem('tarefas')
console.log(listaTarefasSalvas)

const listaTarefasObj = JSON.parse(listaTarefasSalvas)




console.log(listaTarefasObj)
const alunos = [

  {

    nome: 'Maria',

    sobrenome: 'da Silva',

    nota: 10,

  },

  {

    nome: 'José',

    sobrenome: 'Moreira',

    nota: 4,

  },

  {

    nome: 'Paulo',

    sobrenome: 'Henrique',

    nota: 7,

  },

  {

    nome: 'Sara',

    sobrenome: 'Souza',

    nota: 5,

  },

  {

    nome: 'Clara',

    sobrenome: 'Barbosa',

    nota: 9,

  },

  {

    nome: 'Rodrigo',

    sobrenome: 'Barros',

    nota: 4,

  },

  {

    nome: 'Renato',

    sobrenome: 'Barros',

    nota: 7,

  },

  {

    nome: 'Andrea',

    sobrenome: 'Batista',

    nota: 6,

  },

  {

    nome: 'Carla',

    sobrenome: 'Campos',

    nota: 3,

  },

]



const formulario = document.querySelector('#formulario')
const listaAlunos = document.querySelector('#studentList')
const mensagem = document.querySelector('#message')

formulario.onsubmit = e => {
  e.preventDefault()

  const nota = document.forms.formulario.inputNota.value

  filtrarAluno(nota)
}

function filtrarAluno(nota){
  let htmlAlunos = alunos.reduce((acc, curr) => {
    if(curr.nota == nota){
     
      acc += `<li>${curr.nome} ${curr.sobrenome} | Nota: ${curr.nota}</li>`
    }

    return acc
  }, '' )

  if(htmlAlunos){
    listaAlunos.innerHTML = htmlAlunos
    mensagem.innerText = ''
    } else{
      listaAlunos.innerHTML = ''
      mensagem.innerText = 'Não tem nenhum aluno com essa nota'
    }

    document.forms.formulario.inputNota.value = ''
  

}







const alunos = [
  {nome: 'Maria', sobrenome: 'da Silva'},
  {nome: 'José', sobrenome: 'Moreira'},
  {nome: 'Paulo', sobrenome: 'Henrique'},
  {nome: 'Pedro', sobrenome: 'Souza'}, 
]


let alunosFinal = []

alunos.forEach(function(aluno){
alunosFinal.push(aluno.nome + ' ' + aluno.sobrenome)
})

console.log(alunosFinal)

const alunosFinalMap = alunos.map(aluno => aluno.nome + ' ' + aluno.sobrenome)


console.log(alunosFinalMap)
  
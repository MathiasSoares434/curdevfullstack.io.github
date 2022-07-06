const aluno = {

  nome: 'Maria',

  sobrenome: 'da Silva',

  notas: [7, 10, 8, 5, 7, 9],

}

const notasBimestre = aluno.notas.length

const somaNotas = aluno.notas.reduce((acc, curr) => {
  return acc + curr
}, 0)


const media = Math.round(somaNotas/notasBimestre)

console.log(`A média da ${aluno.nome} foi ${media} para o total de ${notasBimestre} Bimestres`)

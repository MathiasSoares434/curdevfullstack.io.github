

let diaSemana = new Date().getDay()
let nomeDiaSemana

switch(diaSemana){
case 0: 
        nomeDiaSemana = 'Sunday'
    break;
case 1:
        nomeDiaSemana = 'Monday'
    break;
case 2: 
    nomeDiaSemana = 'Tuesday'
    break;
case 3:
    nomeDiaSemana = 'Wednesday'
    break;
case 4: 
nomeDiaSemana = 'Thursday'
    break;
case 5:
nomeDiaSemana = 'Friday'
    break;
case 6: 
    nomeDiaSemana = 'Saturday'
break;
  
}

document.write(`O dia da semana é: ${(nomeDiaSemana)}`)
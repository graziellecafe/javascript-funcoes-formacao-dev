const dia1 = 7; 
const mes1 = 'Maio'; 
const ano1 = 2022; 

console.log(`Dia: ${dia1}`);
console.log(`Mês: ${mes1}`);  
console.log(`Ano: ${ano1}`); 

const dia2 = 17; 
const mes2 = 'Dezembro'; 
const ano2 = 2024; 

// Com função 
function exibirData (dia, mes, ano) { 
  console.log(`Dia: ${dia}`); 
  console.log(`Mês ${mes}`); 
  console.log(`Ano ${ano}`); 
  console.log(`Dia ${dia}, do mês de ${mes} do ano de ${ano}`);
}

exibirData(19, 'outubro', 2024); 

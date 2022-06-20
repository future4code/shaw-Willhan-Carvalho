// ------- Exercício 01 -----------
function dados(name:string, date:string){
  const infoName = name;
  const infoDate = date.split('/');

  return `Olá me chamo ${infoName}, nasci no dia ${infoDate[0]} do mês de ${infoDate[1]} do ano de ${infoDate[2]}`
}
console.log(dados('Willhan','11/05/1999'));
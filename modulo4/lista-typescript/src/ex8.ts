// ------- Exercício 08 -----------
function checaRenovacaoRG(ano:number, RG:number) {
  const date = new Date();

  let anoNascimento = ano
  let anoAtual:number = date.getFullYear()
  let RG1 = RG

  let Age = anoAtual - anoNascimento;
  let Renovo =  anoAtual - RG1;

  let crianca = Age <= 20 && Renovo >= 5;
  let Jovem = Age <= 50 && Renovo >= 10;
  let Sir = Age > 50 && Renovo >= 15;

  let booleano = crianca || Jovem || Sir;
  return booleano
}
console.log(checaRenovacaoRG(1999, 2020));

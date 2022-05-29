// ------- Exercício 07 -----------
const infoImport =  [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

type filterImport = {
  nome: string,
  quantidade: number,
  valorUnitario: number | string,
}

const ajustaPreco = (preco:number | string): string => {
	const valorAjustado: string = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
	return "R$ "+valorAjustado
}

function taxaAlfandegaria(infoImport: filterImport[]){
  const infoValorUnitario = infoImport.map((item) => {
      item.valorUnitario = ajustaPreco(item.valorUnitario)
      return item
  }).sort((a, b) => {return a.quantidade - b.quantidade})

  return infoValorUnitario
}

console.log(taxaAlfandegaria(infoImport))
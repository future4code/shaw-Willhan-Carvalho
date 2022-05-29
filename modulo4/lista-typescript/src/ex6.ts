// ------- Exercício 06 -----------
const arrayDeb =  [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] },
  { cliente: "Serasa em Pessoa", saldoTotal: 5200, debitos: [3500, 2500, 500, 500] }
]

type filterDeb = {
  cliente: string,
  saldoTotal: number,
  debitos:number[],
}


function infoDebito(arrayDeb:filterDeb[]){
  const clientesForSerasa:any = [];

  arrayDeb.forEach((dados) => {
    let total = 0
    dados.debitos.forEach((gastos) => {
      total += gastos;
    })

    dados.saldoTotal -= total;
    dados.debitos = [];

    if(dados.saldoTotal < 0){
      clientesForSerasa.push(dados)
    }

  })

  return clientesForSerasa

}
console.log(infoDebito(arrayDeb));
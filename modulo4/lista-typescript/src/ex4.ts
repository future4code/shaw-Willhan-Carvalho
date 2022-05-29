// ------- Exercício 04 -----------
enum Setores {
  marketing = 'marketing',
  vendas = 'vendas',
  financeiro = 'financeiro',
}
type collaboratingPeson = {
	nome: string,
  salário: number,
  setor: Setores,
  presencial: boolean
}

const infoDados = [
	{ nome: "Marcos", salário: 2500, setor: Setores.marketing, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setores.vendas, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setores.financeiro, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setores.marketing, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setores.financeiro, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setores.vendas, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setores.marketing, presencial: true },
  { nome: "Will" ,salário: 4800, setor: Setores.marketing, presencial: true }
]

function filterInfo(collaboratingPeson:collaboratingPeson[]){
  const filterDados = collaboratingPeson.filter((info) => {
    if (info.setor === 'marketing' && info.presencial === true){
      return info
    }
  })

  return filterDados
}
console.log(filterInfo(infoDados));
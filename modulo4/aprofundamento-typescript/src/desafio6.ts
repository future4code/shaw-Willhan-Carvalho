// ----------- DESAFIO 06 -------------
const consultas = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]
type info = { 
  nome: string, 
  idade: number,
  dataDaConsulta: string
  }

function alfabeto(a:any,b:any):any{ // crio uma função de comparador
  if (a.nome < b.nome) {
    return -1
  } else {
    return true
  } // faço com que o objeto nome seja ordenado
}
function retornaArrayOrdenadoAlfabeticamente(consultas:info[]) {
  return consultas.sort(alfabeto) 
}
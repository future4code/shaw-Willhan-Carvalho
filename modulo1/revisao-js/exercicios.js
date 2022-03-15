// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const ordenado = array
    ordenado.sort(function (a,b){
      return (a - b )
    })
    
    return ordenado
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 
 let numeroPar = array.filter(par => (par %2)== 0)

   return numeroPar
   
        
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let numeroPar = array.filter(par => (par %2)== 0)
     
    let elevado = numeroPar.map(function(item){
        return Math.pow(item, 2) 
    })

    return elevado
    
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let numeroMaior = array.reduce(function(a,b){

    return Math.max(a,b)

}, -Infinity)

return numeroMaior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let obejeto = {

maiorNumero: Math.max(num1, num2),
maiorDivisivelPorMenor:Math.max(num1,num2) % Math.min(num1 , num2) === 0,
diferenca:Math.max(num1,num2) - Math.min(num1 , num2)
}
return obejeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
}

   


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB  && ladoB == ladoC){
        return "Equilátero"
    
    }else if (ladoA == ladoB ||ladoA ==ladoC || ladoB == ladoC){
        return "Isósceles"

    }else{
        return "Escaleno"
    }

    
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
array.sort ((a,b) => a - b)
const segundoMenor = array[1]
const segundoMaior = array[array.length - 2]
return [segundoMaior,segundoMenor]
  

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const filmes = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return `Venha assistir ao filme ${filmes.nome}, de ${filmes.ano}, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores[0]}, ${filmes.atores[1]}, ${filmes.atores[2]}, ${filmes.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {


let novoUsuario = {
    ... pessoa ,
    nome: "ANÔNIMO",
	

   }
   return novoUsuario
  } 


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasPermitida = pessoas.filter((pessoas)=>{
     return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade <= 60
    })
    return pessoasPermitida
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoAutorizado = pessoas.filter((pessoas)=>{
      return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60

  })
  return naoAutorizado
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas.forEach((conta)=>{
      let totalDeCompra = 0

      conta.compras.forEach((compras)=>{
          totalDeCompra = totalDeCompra + compras
      })

      conta.saldoTotal = conta.saldoTotal - totalDeCompra
      conta.compras = []
  })
  return contas
}
   

// EXERCÍCIO 15a
function nomesOrdenados(a,b){
    if(a.nome < b.nome){
        return -1
    }else{
        return true
    }
}
function retornaArrayOrdenadoAlfabeticamente(consultas) {
 return consultas.sort(nomesOrdenados)
  


}

// EXERCÍCIO 15B

function nomesOrdenadoData(a,b){
    if(a.dataDaConsulta < b.dataDaConsulta){
        return 1
    }else{
        return -1
    }
}

function retornaArrayOrdenadoPorData(consultas) {
   return consultas.sort(nomesOrdenadoData).reverse
}
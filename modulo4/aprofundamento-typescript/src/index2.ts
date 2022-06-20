// ----------- EXERCÍCIO 02 -------------

// A // - A entrada vai ser um array de numeros e a saida será resultado maior,
// menor e a média deles

function obterEstatisticas(numeros:number[]) {

  const numerosOrdenados:number[] = numeros.sort(
      (a:number, b:number) => a - b
  )

  let soma:number = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}
console.log(obterEstatisticas([3,2,1]));

// B // - Number

// C // - 
type amostraDeIdades = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: (numeros:number) => {}
}
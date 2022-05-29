// ------- Exercício 09 -----------
function anagramaLetras(letras: string) {
  const lestrasPercorridas: string[] = letras.split('')
  let resultado = letras.length
  for (let i = lestrasPercorridas.length; i >= 1 ; i--) {
      resultado *= i
  }
  return resultado
}

console.log(anagramaLetras('Harry Potter'))
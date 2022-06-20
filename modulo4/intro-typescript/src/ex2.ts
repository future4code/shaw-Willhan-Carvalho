function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): string[] {
  const arrayDeCores = []

  arrayDeCores.push(cor1,cor2,cor3) 
  
  return arrayDeCores
}

const coresFavoritas = imprimeTresCoresFavoritas("branco", "azul", "preto")
console.log(coresFavoritas)
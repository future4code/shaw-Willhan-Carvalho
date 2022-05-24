// -------- Exercício 2 ---------- 
const infoCalculation = process.argv[2]
const numberOne = Number(process.argv[3]);
const numberTwo = Number(process.argv[4]);

const calculation = (infoCalculation, numberOne, numberTwo) => {
  if (infoCalculation === 'mais'){
    return numberOne + numberTwo
  }
  else if (infoCalculation === 'menos'){
    return numberOne - numberTwo
  }
  else if (infoCalculation === 'vezes'){
    return numberOne * numberTwo
  }
  else if (infoCalculation === 'dividir'){
    return numberOne / numberTwo
  }
}
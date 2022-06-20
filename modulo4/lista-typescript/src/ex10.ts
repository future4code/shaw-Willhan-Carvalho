// ------- Exercício 10 -----------
const validateCPF = (CPF: string): boolean => {
  let base: string[] = CPF.slice(0, -3).replace(/\./g, "").split("")
  const pseudoDV: string = CPF.slice(12, 14)

  const verify = (): number => {
    return (
      11 -
      (base
        .map((char, i) => {
          return Number(char) * (base.length + 1 - i)
        })
        .reduce((a, b) => a + b) %
        11)
    )
  }

  let dv1: number = verify()

  if (dv1 >= 10) dv1 = 0

  base.push(dv1.toString())

  let dv2: number = verify()

  if (dv2 >= 10) dv2 = 0

  const dvCheck: boolean = dv1.toString() + dv2.toString() === pseudoDV

  return dvCheck
}

console.log("EX10: ", validateCPF("394.171.128-80"))
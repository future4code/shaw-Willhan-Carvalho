// ------- Exercício 11 -----------
const convertToRoman = (num: number): string => {
  type Char = {
    char: string
    value: number
  }

  const dictionary: Char[] = [
    { char: "M", value: 1000 },
    { char: "CM", value: 900 },
    { char: "D", value: 500 },
    { char: "CD", value: 400 },
    { char: "C", value: 100 },
    { char: "XC", value: 90 },
    { char: "L", value: 50 },
    { char: "XL", value: 40 },
    { char: "C", value: 10 },
    { char: "IX", value: 9 },
    { char: "V", value: 5 },
    { char: "IV", value: 4 },
    { char: "I", value: 1 },
  ]

  let romanYear: string = ""

  for (let i = 0; i < dictionary.length; i++) {
    while (num - dictionary[i].value >= 0) {
      romanYear = romanYear + dictionary[i].char
      num -= dictionary[i].value
    }
  }

  return romanYear
}

console.log("EX11: ", convertToRoman(2022))
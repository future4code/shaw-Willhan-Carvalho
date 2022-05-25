function checaTriangulo(a: number, b: number, c: number) {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

const result = checaTriangulo(2, 4, 4)
console.log(result)
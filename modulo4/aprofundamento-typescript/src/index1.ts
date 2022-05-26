// ----------- EXERCÍCIO 01 -------------

// A // - Se colocar numero sem as aspas vai dar erro
const minhaString: string = 'Willhan';
console.log(minhaString);

// B // - Eu posso usar o any ou |
const meuNumero: number = 20;
console.log(meuNumero);

// C // -
type aboutMe = {
  name: string,
  age: number,
  color: string,
}
type person = {
  name: string,
  age: number,
  color: string,
}
type personTwo = {
  name: string,
  age: number,
  color: string,
}
type personThree = {
  name: string,
  age: number,
  color: string,
}

// D // -
enum colorArco {
  ver = 'vermelha',
  lar = 'laranja',
  ama = 'amarela',
  verd = 'verde',
  azu = 'azul',
  azul = 'azul-escuro',
  vio = 'violeta'
}

const aboutMeTwo = {
  name: 'willhan',
  age: 20,
  color: colorArco,
}
console.log(aboutMeTwo);
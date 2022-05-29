// ------- Exercício 03 -----------
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type infoFilm = {
	name: string,
	year: number,
	gener: GENERO,
	evaluation?: number
}

function dadosFilm(name:string, year:number, gener:GENERO, evaluation?:number) {
	const ternario = evaluation !== 0 ? {
		name: name,
		year: year,
		gener: gener,
		evaluation: evaluation
	}
	:
	{
		name: name,
		year: year,
		gener: gener,
	}
	return ternario
}
console.log(dadosFilm('Avatar 2', 2022, GENERO.ACAO, 98))
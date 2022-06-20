// ------- Exercício 05 -----------
enum typeRole {
  user = 'user',
  admin = 'admin'
}

const arrayAdm =  [
	{name: "Rogério", email: "roger@email.com", role: typeRole.user},
	{name: "Ademir", email: "ademir@email.com", role: typeRole.admin},
	{name: "Aline", email: "aline@email.com", role: typeRole.user},
	{name: "Jéssica", email: "jessica@email.com", role: typeRole.user},  
	{name: "Adilson", email: "adilson@email.com", role: typeRole.user},  
	{name: "Carina", email: "carina@email.com", role: typeRole.admin}      
] 

type filterAdm = {
  name: string,
  email: string,
  role: typeRole,
}

function infoAdm(filterAdm:filterAdm[]){
  const filterEmails = filterAdm.filter((dados) => {
    if(dados.role === 'admin'){
      return dados
    }
  }).map((dados) => {
    return dados.email
  })
  return filterEmails
}
console.log(infoAdm(arrayAdm));

import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});


//Criar usuário
const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      id: Date.now().toString(),
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("Users");
};

//Cria Usuário
app.post("/users", async (req: Request, res: Response) : Promise<void> => {
  
  try {
    const name: string = req.body.name;
    const nickname: string = req.body.nickname;
    const email: string = req.body.email;

    if(!name || !nickname || !email){
      throw new Error("Todos os dados precisam ser preenchidos!")
    }

    await createUser(
      name,
      nickname,
      email
      );

    res.status(201).send("Conta criada com sucesso!");
  } catch (error: any) {
    switch(error.message){
      case "conta não encontrada":
      res.status(404).send(error.message)
      break 
      case "usuário já existente":
      res.status(409).send(error.message)
      break
      case "Todos os dados precisam ser preenchidos!":
          res.status(422).send(error.message)      
      default:
      res.status(500).send("algo deu errado")
    }
  }
});

/////////////////////////////////////////////////////////////////

//Busca usuário por id
const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT id, nickname FROM Users WHERE id = '${id}'
  `)
	return result[0][0]
};

//Mostra id e apelido do usuário
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const userId = (await getUserById(id))

    res.status(200).send(userId)
  } catch (error: any) {
      res.status(500).send(error.message)
    }
}); 


/////////////////////////////////////////////////////////////////

//Recebe os dados e atualiza
const updateUser = async (
  id: string,
  name: string, 
  nickname: string, 
  email: string
  ): Promise<any> => {
  await connection("Users")
    .update({
      name: name,
      nickname: nickname,
      email: email
    })
    .where("id", id);
};

//Altera os dados do usuário
app.put("/users/edit/:id" , async (req: Request, res: Response) =>{
  try{ 
    await updateUser(
      req.params.id, 
      req.body.name,
      req.body.nickname,
      req.body.email,
      );

      res.status(200).send({
        message: "Alterado com sucesso",
      });
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  });

/////////////////////////////////////////////////////////////////

//Criar tarefa
const createTask = async (

  title: string,
  description: string,
  limitDate: string,
  status: string,
  creatorUserId: string,
  creatorUserNickname: string,

): Promise<void> => {
  await connection
    .insert({
      id: Date.now().toString(),
      title: title,
      description: description,
      limitDate: limitDate.split("/").reverse().join("-"),
      status: status,
      creatorUserId: creatorUserId,
      creatorUserNickname: creatorUserNickname
    })
    .into("ListTask");
};

//Criar Tarefa e adicionar no banco de dados
app.post("/task", async (req: Request, res: Response) : Promise<void> => {
  try {
      const title: string = req.body.title
      const description: string = req.body.description 
      const limitDate = req.body.limitDate
      const status: string = req.body.status
      const creatorUserId: string = req.body.creatorUserId 
      const creatorUserNickname: string = req.body.creatorUserNickname

  if(
      !title || 
      !description || 
      !limitDate || 
      !status ||
      !creatorUserId ||
      !creatorUserNickname
      ){
      throw new Error("Todos os dados precisam ser preenchidos!")
      }

    if(typeof limitDate !== "string"){
      throw new Error("A data está num formato inválido, precisa ser uma string da seguinte forma dd/mm/yy")
    }

    await createTask(
      title,
      description,
      limitDate,
      status,
      creatorUserId,
      creatorUserNickname
      );

    res.status(201).send("Tarefa criada com sucesso!");
    
  } catch (error: any) {
    switch(error.message){
      case "Tarefa não encontrada":
        res.status(404).send(error.message)
      break
      case "A data está num formato inválido, precisa ser uma string da seguinte forma dd/mm/yy":
        res.status(406).send(error.message)
      break 
      case "Todos os dados precisam ser preenchidos!":
        res.status(422).send(error.message)      
      default:
        res.status(500).send("Algo deu errado")
    }
  }
});

/////////////////////////////////////////////////////////////////

//Busca tarefa por id
const getTaskById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM ListTask WHERE id = '${id}'
  `)
	return result[0][0]
};

//Mostra tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const taskId = (await getTaskById(id))

    res.status(200).send(taskId)

  } catch (error: any) {
      res.status(500).send(error.message)
    }
}); 

/////////////////////////////////////////////////////////////////////////////////

//Desafio 6 Pegar todos os usuário

//Busca todos usuários
const getAllUsers = async(): Promise<any[]> => {
  const result = await connection.raw(`
    SELECT id, nickname FROM Users
  `)
  
	return result
};

//Mostra id e apelido do usuário
app.get("/users", async (req: Request, res: Response) => {

  try {
    let allUsers: any = (await getAllUsers())
    

    if(allUsers.length === 0){
      allUsers = []
    }
    
    res.status(200).send({users: allUsers})
    
  } catch (error: any) {
      res.status(500).send(error.message)
    }
});

//////////////////////////////////////////////////////////////

//Desafio 8 Pegar todos os usuário
//Busca usuário por query
const searchUser = async (nickname: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT id, nickname FROM Users WHERE nickname = '${nickname}'
  `)
	return result[0][0]
};

//Mostra id e apelido do usuário por quary
app.get("/users", async (req: Request, res: Response) => {
  const query = req.query.query as string;
  try {
    if (!query) {
      throw new Error("Sua query não foi enviada.");
    }

    let search = (await searchUser(query));

    if (search.length === 0) {
      search = [];
    }

    res.status(200).send({users: search})
  } catch (error: any) {
      res.status(500).send(error.message)
    }
}); 

/////////////////////////////////////////////////////////////////////


//Deletar

const deleteUser = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    DELETE FROM Users WHERE id = '${id}'
  `)
  result[0]
}; 

//Deleta usuário
app.delete("/users/:id", async (req: Request, res: Response) : Promise<any> => {
  try {
    const userId: string = req.params.id


    if (!userId ) {
      throw new Error("Id não existe.");
    }
    console.log(userId)
   

    await deleteUser(userId);

    res.status(200).send("Excluído")
  } catch (err: any) {
    res.status(412).send({
      message: err.message,
    });
  }
});

/////////////////////////////////////////////////////////////////


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
});
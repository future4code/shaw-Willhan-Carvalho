import express from "express";
import dotenv from "dotenv";

import { AddressInfo } from "net";
import knex from "knex";
import axios from "axios";
dotenv.config();

const app = express();

app.use(express.json());

const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306 ||  process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  const URL = 'https://labenews.herokuapp.com/subscribers'

  //axios.get(`${URL}`)
    //.then((res)=>res.data)
   // .then(console.log)
    


// ----------ATIVIDADE-1


    /*async function getSubscribers(): Promise<void> {
        const response = await axios.get(`${URL}`)
        return response.data.map((user:string)=>{
        console.log(user);

            return{
                user
            }
        })
        
    }
    
    const main =async (): Promise<void> => {
  try {
      await getSubscribers()
  }catch (error:any){
      console.log("erro",error);
      
  }
}

main()

    
//----------ATIVIDADE-2
const getSubscribers = async (): Promise<void> =>{
        const response = await axios.get(`${URL}`)
        return response.data.map((user:string)=>{
        console.log(user);

            return{
                user
            }
        })
        
    }
    
    const main =async (): Promise<void> => {
  try {
      await getSubscribers()
  }catch (error:any){
      console.log("erro",error);
      
  }
}

main()
*/

    type user = {
      id: string;
      name: string;
      email: string;
    }

const getSubscribers = async (): Promise<void> => {
  const response = await axios.get(`${URL}`)
  return response.data.map((user:user)=>{
    console.log(user);

        return{
            id: user.id,
            name: user.name,
            email: user.email,
        }
    })
}

const main =async (): Promise<void> => {
  try {
      await getSubscribers()
  }catch (error:any){
      console.log("erro",error);
      
  }
}

main()



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



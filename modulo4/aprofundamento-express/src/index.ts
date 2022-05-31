import express from "express";
import { afazeres } from "./lista";

const app = express();
app.use(express.json());
const port = 3003
const server = app.listen(port, () => {
    if (server) {

        console.log(`Servidor está rodando in http://localhost:${port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
app.get("/ping", (req, res) => {
    return res.status(200).send("Pong! 🏓")
})
app.get("/lista", (req, res) => {
    
    const completo = afazeres.filter((afazer)=>{
        return afazer.completed === true
    }) 
    res.send(completo)
})
app.post("/novatarefa", (req, res) => {
    const criarTarefa = {
        userId: Date.now().toString(),
        id: Date.now().toString(),
        title: req.body.title,
        completed: req.body.completed
    }
    console.log(req.body)
    const novaAtividade = [...afazeres, criarTarefa ]

    res.status(200).send({novaAtividade})

    })
    app.delete("/list/:delPost", (req, res) => {
        const postdelete = Number(req.params.delPost)
    
        const listUpdate = afazeres.filter((task) => {
            return task.id !== postdelete
        })
        res.status(200).send(listUpdate)
    })

    app.get ("/pegartarefa/:id", (req,res)=>{
        const idFazer = Number (req.params.id)
        const findTarefa = afazeres.filter((arr)=>{
          return arr.userId == idFazer
        })
        res.status(200).send(findTarefa)

       
        
    })
    
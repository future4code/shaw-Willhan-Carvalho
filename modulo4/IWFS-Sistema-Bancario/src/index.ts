import * as cors from "cors";
import * as express from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//teste 

app.get("/ping", (req, res) => {          
    res.send("eae Pong! 🏓")
})
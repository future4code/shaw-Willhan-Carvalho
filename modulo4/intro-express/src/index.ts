import express from "express"
import cors from "cors"

type User = {
  id: number
  name: string
  phone: string
  email: string
  website: string
}

const userBase: User[] = [
  {
    id: 1,
    name: "Willhan marques ",
    phone: "(66)99695-0327",
    email: "will09@gmail.com",
    website: "github.com/willmarques09",
  },
  {
    id: 2,
    name: "Pablo",
    phone: "(21)1111-0000",
    email: "pantera@gmail.com",
    website: "github.com/pantera",
  },
  {
    id: 3,
    name: "Leticia",
    phone: "(91)9000-9000",
    email: "le@gmail.com",
    website: "github.com/le",
  },
  {
    id: 4,
    name: "servulo",
    phone: "(71)9999-9999",
    email: "sevulo@gmail.com",
    website: "github.com/servulo",
  },
  {
    id: 5,
    name: "andreyna",
    phone: "(66)9695-0327",
    email: "drica@gmail.com",
    website: "github.com/andreyna",
  },
  {
    id: 6,
    name: "cleonice",
    phone: "(66)9966-5566",
    email: "cleo@gmail.com",
    website: "github.com/cleo",
  },
]

type Post = {
  id: number
  title: string
  body: string
  userId: number
}

const postsBase: Post[] = [
  {
    id: 1,
    title: "salve",
    body: "tranquilo?",
    userId: 1,
  },  {
    id: 2,
    title: "salves",
    body: "tranquilos?",
    userId: 3,
  },
]

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.get("/users", (req, res) => {
  res.send(userBase)
})

app.get("/posts", (req, res) => {
  req.query.id
    ? res.send(postsBase.map((post) => {
        if (Number(req.query.id) === post.userId) return post
      }))
    : res.send(postsBase)
})


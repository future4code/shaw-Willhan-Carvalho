import express from "express"
import { AddressInfo } from "net"
import { Product, products } from "./data"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

app.get("/test", (req, res) => {
  res.send("Olá")
})

app.post("/products", (req, res) => {
  if (req.body) {
    let newProduct: Product = {
      id: (products.length + 1).toString(),
      name: req.body.name,
      price: req.body.price,
    }
    products.push(newProduct)
    res.send(products)
  }
})

app.get("/products", (req, res) => {
  res.send(products)
})

app.put("/products/:id", (req, res) => {
    products.filter((prod) => {
        if (req.params.id === prod.id) prod.price = req.body.price
    })
    res.send(products)
})

app.delete("/products/:id", (req, res) =>{
    const newProducts = products.filter((prod, i) => {
        if (prod.id === req.params.id) products.splice(i, 1)})

    console.log(products)
    res.send(products)
})
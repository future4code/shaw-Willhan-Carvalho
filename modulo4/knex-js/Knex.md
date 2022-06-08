ex1:

a) a resposta usando raw vem como um array, onde o primeiro item é o resultado daquela query, e os outros itens são configurações daquela parte específica da DB.

b)

app.get("/actor/:name", async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(
      `SELECT * FROM Actor WHERE name LIKE "%${req.params.name}%";`
    )
    res.send(result[0])
  } catch (error: any) {
    res.send(error.message)
  }
})
c)

app.get("/actor",async (req:Request, res: Response) => {
  try {
    const result = await connection.raw(
      `SELECT COUNT(gender), gender FROM Actor WHERE gender = "${req.query.gender}"`
    )
    res.send(result[0])
  } catch (error: any) {
    res.send(error.message)
  }
})
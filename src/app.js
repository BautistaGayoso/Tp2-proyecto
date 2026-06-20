import express from "express"
import router from "./routes/router.js"
import connection from "./db/connection.js"
import "./models/Asociaciones.js"
import cors from "cors"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

await connection.sync({force : false})
// await connection.sync({ alter: true })

app.use(cors())

app.use("/app",router)

app.use((req,res) => {
    res.status(400).send('something broke!', res)
})

export default app


import app from "./src/app.js"
import { SERVER_PORT } from "./config/config.js"

app.listen(SERVER_PORT,()=>{
    console.log(`server on http://localhost:${SERVER_PORT}`)
})
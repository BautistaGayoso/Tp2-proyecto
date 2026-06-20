import {Router} from "express" 
import PilotoF1Controller from "../controllers/PilotoF1Controller.js"

const pilotoF1Controller = new PilotoF1Controller()
const f1Routes = Router()

f1Routes.get("/pilotos", pilotoF1Controller.getPilotos)
f1Routes.get("/piloto/:id", pilotoF1Controller.getPilotoById)
// f1Routes.post("/sync-pilotos", pilotoF1Controller.syncPilotos)
// f1Routes.get("/pilotos-api", f1Controller.getPilotosFromApi)

export default f1Routes
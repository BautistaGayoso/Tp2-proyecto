import {Router} from "express"
import EquipoF1Controller from "../controllers/EquipoF1Controller.js"

const equipoF1Controller = new EquipoF1Controller()
const equipoF1Routes = new Router()


equipoF1Routes.get("/:userId", equipoF1Controller.getEquipoByUser)
equipoF1Routes.put("/:userId", equipoF1Controller.updateEquipo)

export default equipoF1Routes
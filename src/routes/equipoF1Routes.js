import {Router} from "express"
import EquipoF1Controller from "../controllers/EquipoF1Controller.js"

const equipoF1Controller = new EquipoF1Controller()
const equipoF1Routes = new Router()


teamF1Routes.get("/:userId", equipoController.getEquipoByUser)
equipoF1Routes.put("/:userId", equipoController.updateEquipo)

export default equipoF1Routes
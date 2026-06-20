import {Router} from "express"
import usuariosRoutes from "./usuariosRoutes.js"
import pilotosF1Routes from "./pilotosF1Routes.js"
import constructoresF1Routes from "./constructoresF1Routes.js"
import equipoF1Routes from "./equipoF1Routes.js"
// import torneosF1Routes from "./torneosF1Routes.js";

const router = Router()

router.use("/usuarios",usuariosRoutes)
router.use("/equipo", equipoF1Routes)
router.use("/pilotos", pilotosF1Routes)
router.use("/constructores", constructoresF1Routes)
// router.use("/torneos", torneosF1Routes);

export default router;




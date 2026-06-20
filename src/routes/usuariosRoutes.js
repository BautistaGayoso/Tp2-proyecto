import {Router} from "express" 
import UsuarioController from "../controllers/UsuarioController.js"
// import validateUser from "../middlewares/validateUser.js"

const usuarioController = new UsuarioController()
const usuariosRoutes = Router()


usuariosRoutes.get("/", usuarioController.getAllUsuarios)
usuariosRoutes.get("/:id", usuarioController.getUsuarioById)

usuariosRoutes.post("/login", usuarioController.login)
// usuariosRoutes.post("/register",validateusuario, usuarioController.createUsuario)
usuariosRoutes.post("/register", usuarioController.createUsuario)
usuariosRoutes.put("/:id", usuarioController.updateUsuario) 

usuariosRoutes.delete("/:id", usuarioController.deleteUsuario)




export default usuariosRoutes
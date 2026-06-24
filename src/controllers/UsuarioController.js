import EquipoF1Service from "../services/EquipoF1Service.js"
import UsuarioService  from "../services/UsuarioService.js"


class UsuarioController {

usuarioService = new UsuarioService()
equipoService = new EquipoF1Service()

getUsuarioById = async (req,res) => {
    try{
        const data = req.body
        const usuario = await this.usuarioService.getusuarioById(data.id)
        res.status(200).send({
            success: true,
            message: usuario
        })
    }catch(error){
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

createUsuario = async(req,res)=>{
try {
    const {name,mail,password} = req.body
    const usuario = await this.usuarioService.createUsuario({name,mail,password})
    await this.equipoService.createEquipo(usuario.id)
    res.status(200).send({
    success: true,
    usuario
    })

} catch (error) {
    res.status(400).send({
    success: false,
    message: error.message
    })
}
}

updateUsuario = async(req,res)=>{
try {
    const {id} = req.params
    const {name,mail,pass,profile_pic} = req.body
    const usuario = await this.usuarioService.updateusuario({id,name,mail,pass,profile_pic})
    res.status(200).send({
    success: true,
    usuario
    })

} catch (error) {
    res.status(400).send({
    success: false,
    message: error.message
    })
}
}


deleteUsuario = async (req,res)=>{
    try {
        const {id} = req.params
        const usuario = await this.usuarioService.deleteusuario({id})
        res.status(200).send({
            success: true,
            message: usuario
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

getAllUsuarios =async(req,res)=>{
    try {
            const usuario = await this.usuarioService.getAllusuarios()
            res.status(200).send({
            success: true,
            message: usuario
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}

login = async (req, res) => {
    try {
        const {mail, password} = req.body;
        
        const usuario = await this.usuarioService.login({mail, password});

        res.status(200).send({ 
            success: true, 
            usuario });
    } catch (error) {
        res.status(400).send({
            success: false, 
            message: error.message });
    }
}

}


export default UsuarioController
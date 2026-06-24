import Equipo from "../models/Equipo.js"
import Usuario from "../models/Usuario.js"

class UserService{


getUsuarioById = async (id) => {
    const usuario = await Usuario.findByPk(id)
    return{name: usuario.name, mail: usuario.mail} 
}

createUsuario = async(data) =>{
    const {id,name,mail} = await Usuario.create(data)
    return {id,name,mail}
}

updateUsuario= async (data) => {
    const usuario = await Usuario.findByPk(data.id)
    if (!usuario){
    throw new Error(`usuario no encontrado`)
    }
    
    await usuario.update(data)
    return usuario
} 

deleteUsuario = async(data) =>{

    const usuario = await Usuario.findByPk(data.id)
    // const deleted = await Usuario.destroy({where: {id: data.id}})

    if(!usuario){
        throw new Error(`usuario ${data.id} NO ENCONTRADO`)
        
    }
    const equipo = await Equipo.findOne({
        where: {
            userId: data.id
        }
    })
    if(equipo){
        await equipo.destroy()
    }
    await  usuario.destroy()
    
    
    return `usuario eliminado`
}

getAllUsuarios =async()=>{
    const users = await Usuario.findAll({
        attributes: ["name", "mail", "password", ]
    })
    return users
}

login = async ({ mail, password}) => {
    const usuario = await Usuario.findOne({
    where: { mail },
    attributes: ["id","name","mail","password","profile_pic","password"],
    });
    if (!usuario) throw new Error("usuario not found");

    const validatepassword= await usuario.validatepassword(password);
    
    if (usuario.password !== password) {
    throw new Error("Invalid password");
}
return {
    id: usuario.id,
    name: usuario.name,
    mail: usuario.mail,
    profile_pic: usuario.profile_pic

}


}
}

export default UserService
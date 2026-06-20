import F1Service from "../services/F1Service.js"
import ConstructorF1Service from "../services/ConstructorF1Service.js"

const f1service = new F1Service()
const constructorF1Service = new ConstructorF1Service()
class ConstructorF1Controller{

    getConstructoresById = async (req,res) => {
        try{
            const {id} = req.params
            const constructor = await constructorF1Service.getConstructorById(id)
            res.status(200).send({
                success: true,
                message: constructor.name
            })
        }catch(error){
            res.status(400).send({
                success: false,
                message:error.message
            })
        }
    }


    
    getConstructoresFromDB = async (req,res) => {
        try{
            const constructores = await constructorF1Service.getAllConstructores()
            res.json(constructores)
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Error al obtener constuctores'})
        }
    }
    
    
}

syncConstructores = async (req,res) => {
    try{
        const constructoresFromApi = await f1service.getConstructores()
        const result = await constructorService.syncConstructores(constructoresFromApi)
        
        res.status(200).json({
            message: "Constructores sincronizados correctamente",
            result
        })
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error al sincronizar los constructores'})
        
    }
}

export default ConstructorF1Controller


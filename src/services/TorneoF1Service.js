import Torneo from "../models/Torneo.js"
import Participantes from "../models/Participantes.js";
import Usuario from "../models/Usuario.js";

class TorneoF1Service {

    createTorneo = async (data) => {

        const torneo = await Torneo.create(data)
        return torneo
    }

    joinTorneo = async (userId, torneoId) => {


        const torneo = await this.getTorneoById(torneoId)
        const usuario = await Usuario.findByPk(userId)


        if (!usuario) {
        throw new Error("usuario no encontrado")
        }


        const participante = await Participantes.findOrCreate({
            where: {
                userId,
                torneoId
            }
        });

        return participante;
    }

    getParticipantes = async (torneoId) => {

        const torneo = await Torneo.findByPk(torneoId, {
        include: Usuario
    })

        return torneo
    }


    getAllTorneos = async () => {

        const torneos = await Torneo.findAll()

        return torneos
    }


    getTorneoById = async (id) => {

        const torneo = await Torneo.findByPk(id)

        if(!torneo){
            throw new Error("torneo no encontrado")
        }

        return torneo
    }

    updateTorneo = async (id,data) => {
        const torneo = await this.getTorneoById(id)

        await torneo.update(data)
        
        return torneo
    }

    deleteTorneo = async (id) => {
        const torneo = await this.getTorneoById(id)

        if(!torneo){
            throw new Error("torneo no encontrado")
        }

        await torneo.destroy()

        return "torneo eliminado"

    }
}

export default TorneoF1Service
import EquipoF1Service from "../services/EquipoF1Service.js"

const equipoF1Service = new EquipoF1Service()

class EquipoF1Controller {

    getEquipoByUser = async (req,res) => {
        try {

            const { userId } = req.params

            const equipo = await equipoF1Service.getEquipoByUser(userId)

            res.status(200).send({
                success: true,
                equipo
            })

        } catch (error) {

            res.status(400).send({
                success: false,
                message: error.message
            })
        }
    }

    updateEquipo = async (req,res) => {
        try {

            const { userId } = req.params

            const equipo = await equipoF1Service.updateEquipo(userId,req.body)

            res.status(200).send({
                success: true,
                equipo
            })

        } catch (error) {

            res.status(400).send({
                success: false,
                message: error.message
            })
        }
    }
}

export default EquipoF1Controller
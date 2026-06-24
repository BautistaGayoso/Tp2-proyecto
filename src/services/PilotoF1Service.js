import Piloto from "../models/Piloto.js"

class PilotoF1Service {


    getAllPilotos = async () => {
        const pilotos = await Piloto.findAll()
        return pilotos
    }

    getPilotoById = async (id) => {
        const piloto = await Piloto.findByPk(id)
        return piloto
    }


    // funcion para traerme los pilotos de la api
    // y guardarlos en la base con el precio de cada piloto

    syncPilotos = async (pilotosFromApi) => {
        let createdCount = 0
        let existingCount = 0
        const pilotosPrices = {
            Verstappen: 30,
            Norris: 28,
            Leclerc: 27,
            Piastri: 26,
            Hamilton: 25,
            Russell: 24,
    
            Alonso: 21,
            Sainz: 21,
            Albon: 19,
            Gasly: 18,

            Tsunoda: 17,
            Ocon: 17,
            Hulkenberg: 16,
            Stroll: 15,

            Bearman: 14,
            Lawson: 14,
            Antonelli: 14,

            Doohan: 12,
            Bortoleto: 12,
            Hadjar: 12,
            Colapinto: 12
        }
        
        for (const piloto of pilotosFromApi) {
            const [pilotoSaved, created] = await Piloto.findOrCreate({
                where: { pilotoId: piloto.driverId },
                defaults: {
                    pilotoId: piloto.driverId,
                    permanentNumber: piloto.permanentNumber,
                    givenName: piloto.givenName,
                    familyName: piloto.familyName,
                    code: piloto.code || null,
                    nationality: piloto.nationality || null,
                    dateOfBirth: piloto.dateOfBirth || null,
                    price: pilotosPrices[piloto.familyName] || 10
                }
            })
            if (created) {
                createdCount++
            } else {
                existingCount++
            }
        }

        return {
            created: createdCount,
            existing: existingCount
        }
    }

}

export default PilotoF1Service


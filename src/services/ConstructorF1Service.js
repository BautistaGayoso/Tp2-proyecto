import Constructor from "../models/Constructor.js"


class constructorF1Service{

    
    getAllConstructores = async () => {
        const constructors = await Constructor.findAll()
        return constructors
    }
    
    getConstructorById = async (id) =>{ 
        const constructor = await Constructor.findByPk(id)
        
        if(!constructor){
            throw new Error(`constructor ${id} no encontrado`)
        }
        return constructor
    }

}

export default constructorF1Service

//     syncConstructores = async(constructoresFromApi) =>{
//     let createdCount = 0;
//     let existingCount = 0;

//     const constructoresPrices = {
//         mclaren: 30,
//         ferrari: 29,
//         mercedes: 28,
//         red_bull: 27,

//         williams: 20,
//         alpine: 19,
//         rb: 18,
//         haas: 17,

//         aston_martin: 16,
//         audi: 15,
//         cadillac: 10
//     };

//     for (const constructor of constructoresFromApi) {
//         const [constructorSaved, created] = await Constructor.findOrCreate({
//             where: {
//                 constructorId: constructor.constructorId
//             },
//             defaults: {
//                 constructorId: constructor.constructorId,
//                 name: constructor.name,
//                 nationality: constructor.nationality || null,
//                 price: constructoresPrices[constructor.constructorId] || 10
//             }
//         });

//         if (created) {
//             createdCount++;
//         } else {
//             existingCount++;
//         }
//     }

//     return {
//         createdCount,
//         existingCount
//     };
// }
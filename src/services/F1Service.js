
// class F1Service{
//     getPilotos = async () => {
//         const response = await fetch('https://api.jolpi.ca/ergast/f1/2026/drivers')

//         if (!response.ok) {
//             throw new Error(`Error HTTP: ${response.status}`)
//         }
        
//         const data = await response.json()
        
//         return data.MRData.DriverTable.Drivers
//     }

//     getConstructores = async () => {
//         const response = await fetch('https://api.jolpi.ca/ergast/f1/2026/constructors.json')
//         if (!response.ok){
//             throw new Error(`Error HTTP: ${response.status}`)
//         }

//         const data = await response.json()

//         return data.MRData.ConstructorTable.Constructors
//     }
// }

// export default F1Service



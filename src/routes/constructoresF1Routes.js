import {Router} from "express" 
import ConstructorF1Controller from "../controllers/ConstructorF1Controller.js"

const constructoresF1Controller = new ConstructorF1Controller()
const constructorF1Routes = Router()


constructorF1Routes.get("/", constructoresF1Controller.getConstructoresFromDB)
constructorF1Routes.get("/:id", constructoresF1Controller.getConstructoresById )



export default constructorF1Routes

// constructorF1Routes.post("/sync-constructors", constructorsF1Controller.syncConstructors)
//https://api.jolpi.ca/ergast/f1/2026/driverstandings.json
//https://api.jolpi.ca/ergast/f1/2026/results.json


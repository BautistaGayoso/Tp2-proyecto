import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"

class equipo extends Model{}
 equipo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50
    },
    totalCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    totalPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},{
    sequelize: connection,
    modelName:  "equipo"
})

export default equipo
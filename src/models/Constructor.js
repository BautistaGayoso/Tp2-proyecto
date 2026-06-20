import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"

class Constructor extends Model{}

Constructor.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    constructorId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},{
    sequelize: connection,
    modelName: "Constructor"
})

export default Constructor
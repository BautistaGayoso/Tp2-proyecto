import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"

class Piloto extends Model{}
 Piloto.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    driverId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    permanentNumber:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    givenName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    familyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateOfBirth: {
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
    modelName:  "Piloto"
})

export default Piloto
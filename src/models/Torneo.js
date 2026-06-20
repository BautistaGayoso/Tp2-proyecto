import { DataTypes, Sequelize } from "sequelize";
import connection from "../db/connection.js";


class Torneo extends Model{}

Torneo.init ({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: connection,
    modelName: "Torneo"
});

export default Torneo;
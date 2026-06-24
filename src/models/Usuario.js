import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"
import bcrypt from "bcrypt"


class Usuario extends Model {
    validatePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
    }       
}

Usuario.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[a-z]+$/i, 
        }
    },
    mail: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        }
    },
    profile_pic: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    sequelize: connection,
    modelName: "Usuario"
})

Usuario.beforeCreate(async (usuario) => {
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(usuario.password, salt);
usuario.password = hash;
});

export default Usuario
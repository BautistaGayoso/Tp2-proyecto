import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"
import bcrypt from "bcrypt"
class Usuario extends Model {
    validatePassword = async (pass) => {
    return await bcrypt.compare(pass, this.pass);
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

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

export default Usuario
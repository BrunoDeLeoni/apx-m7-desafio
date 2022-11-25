import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database/connection"

class Auth extends Model{};

Auth.init({
        userId: DataTypes.INTEGER,
        username: DataTypes.STRING,
        userPassword: DataTypes.STRING        
    },
    {
        sequelize,
        modelName: 'Auth'
    }
)

export { Auth }
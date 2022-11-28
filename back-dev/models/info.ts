/* Imports */
import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database/connection"

class Info extends Model{}

Info.init({
    petInfo: DataTypes.STRING,
},
{
    sequelize,
    modelName: 'Info'
})

export { Info }
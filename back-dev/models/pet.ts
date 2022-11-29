/* Imports */
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/connection"

class Pet extends Model{};

Pet.init({
    petActive: DataTypes.BOOLEAN,
    petName: DataTypes.STRING,
    petBreed: DataTypes.STRING,
    petLocation: DataTypes.STRING,
    petDescription: DataTypes.TEXT,
    petPhoto: DataTypes.STRING,
    // petMap: DataTypes.ARRAY,
},
{
    sequelize,
    modelName: 'Pet'
});

export { Pet }
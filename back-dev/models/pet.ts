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
    petMapLng: DataTypes.FLOAT,
    petMapLat: DataTypes.FLOAT,
},
{
    sequelize,
    modelName: 'Pet'
});

export { Pet }
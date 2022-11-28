/* Imports */
import { User } from "./user";
import { Auth } from "./auth";
import { Pet } from "./pet";
import { Info } from "./info";

User.hasMany(Pet)
Pet.belongsTo(User)

Pet.hasMany(Info)
Info.belongsTo(Pet)

User.hasMany(Info)
Info.belongsTo(User)

/* Exports */
export { 
    User,
    Auth,
    Pet,
    Info
}
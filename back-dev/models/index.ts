/* Imports */
import { User } from "./user";
import { Auth } from "./auth";
import { Pet } from "./pet";

User.hasMany(Pet)
Pet.belongsTo(User)

/* Exports */
export { 
    User,
    Auth,
    Pet
}
/* Imports */
import { sequelize } from "./connection";
import "../models"

/* Sincronización */
const Sync = sequelize.sync({ force: true })
.then((sync)=>{
    console.log('Initial Sync')
    console.log(sync)
    console.log('Finish Sync')
})

export { Sync }
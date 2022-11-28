/* Imports */
import { User, Pet, Info } from "../models"

/* Pet: Crear una nueva mascota perdida */
export async function petCreate(userId, data){
    const { petName, petBreed, petLocation, petDescription } = data
    const petNew = await Pet.create({
        petActive: true,
        petName,
        petBreed,
        petLocation,
        petDescription,
        UserId: userId,
    })
    return petNew;
}

/* Pet: Todas las mascotas buscadas activas en ghost */
export async function petVisit(){
    const petSearch = await Pet.findAll({
        where:{
            petActive: true,
        }
    })
    return petSearch
}

/* Pet: Todas las mascotas que reporte */
export async function petMyReports(userId){
    const petSearch = await Pet.findAll({
        where:{
            UserId: userId,
        }
    })
    return petSearch
}

/* Pet: Todas las mascotas reportadas activas */
export async function petReported(){
    const petSearch = await Pet.findAll({
        where:{
            petActive: true,
        }
    })
    return petSearch
}

/* Pet: Function Status */
function changeOption(data){
    const { petActive } = data
    if(petActive == true){
        return false
    } else {
        return true
    }
}

/* Pet: Status Search */
export async function changeSearch(data){
    const option = changeOption(data)    
    const petUpdate = await Pet.update({
        petActive: option
    }, {
        where: {
            id: data.petId
        }
    });
    return petUpdate
}

/* Imports */
import { User, Pet } from "../models"

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

/* Pet: Informacion de una mascota que reporte */
export async function petMyReportsInfo(petId){
    const petSearch = await Pet.findByPk(petId)
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

/* Pet: Informacion de una mascota reportada */
export async function petReportedInfo(petId){
    const petSearch = await Pet.findByPk(petId, {
        include: [User]
    })
    return petSearch
}

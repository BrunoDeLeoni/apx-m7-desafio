/* Imports */
import { User, Pet, Info } from "../models"

/* Info: Mascota que reporte */
export async function petMyReportsInfo(petId){
    const petSearch = await Pet.findByPk(petId)
    return petSearch
}

/* Info: Mascota reportada por otro usuario */
export async function petReportedInfo(petId){
    const petSearch = await Pet.findByPk(petId, {
        include: [User]
    })
    return petSearch
}

/* Info: Añadir información a una mascota reportada */
export async function petReportedInfoAdd(userId, body){
    const { petInfo, petId } = body
    const petInfoNew = await Info.create({
        petInfo,
        UserId: userId,
        PetId: petId,
    })
    return petInfoNew
}

/* Info: Busca la información añadida por otros usuarios */
export async function petMyReportsInfoAdd(body){
    const petInfo = await Info.findAll({
        where:{
            PetId: body.petId
        },
        include: [User]
    })
    return petInfo
}

/* Imports */
import { User, Pet, Info } from "../models"
import { sgMail } from "../lib/sendgrid"

/* Info: Mascota que reporte */
export async function petMyReportsInfo(petId){
    const petSearch = await Pet.findByPk(petId)
    return petSearch
}

/* Info: Busca la información añadida por otros usuarios a mi mascota */
export async function petMyReportsInfoAdd(body){
    const petInfo = await Info.findAll({
        where:{
            PetId: body.petId
        },
        include: [User]
    })
    return petInfo
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

/* Info: Enviar Email con Notificación */
export async function sendEmail(info, email){
    const msg = {
        to: email, 
        from: 'webapp.notificaciones@gmail.com',
        subject: 'Notification / ¿Where is my dog?',
        text: 'Tienes nueva información sobre tu mascota: ' + info,
        html: '<strong>Tienes nueva información sobre tu mascota: </strong>' + info,
    }
    console.log(msg)
    sgMail
    .send(msg)
    .then(() => {
        return true
    })
    .catch((e) => {
        console.error(e)
    })
}

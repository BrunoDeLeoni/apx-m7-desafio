/* Imports */
import { Pet } from "../models"
import { cloudinary } from "../lib/cloudinary"
import { indexAlgolia } from "../lib/algolia"

/* Pet: Crear una nueva mascota perdida */
export async function petCreate(userId, data){
    const { petName, petBreed, petLocation, petMapLng, petMapLat, petDescription, petPhoto } = data
    const image = await cloudinary.uploader.upload(petPhoto, {
        resource_type: "image",
        discard_original_filename: true,
        width: 1000
    })
    const petNew = await Pet.create({
        petActive: true,
        petName,
        petBreed,
        petLocation,
        petDescription,
        petMapLng,
        petMapLat,
        petPhoto: image.secure_url,
        UserId: userId,
    })
    const petNewIndexAlgolia = await indexAlgolia
    .saveObject({
        objectID: petNew.get("id"),
        name: petName,
        _geoloc: {
            lng: petMapLng,
            lat: petMapLat,
        }
    })
    console.log(petNewIndexAlgolia)
    return petNew;
}

/* Pet: Chequea el estado actual de la mascota */
function changeOption(data){
    const { petActive } = data
    if(petActive == true){
        return false
    } else {
        return true
    }
}

/* Pet: Cambia el estado de la mascota perdida */
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

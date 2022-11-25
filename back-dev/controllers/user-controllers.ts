/* Imports */
import { User, Auth } from "../models"
import * as crypto from "crypto"
import * as jwt from "jsonwebtoken"

/* Crypto */
export function getSHA256ofJSON(pass: string){
    return crypto.createHash('sha256')
    .update(pass)
    .digest('hex')
}

/* User: Crear un nuevo usuario */
export async function userCreate(data){
    const { username, userFullname, userEmail } = data
    const { userPassword } = data
    const [userNew, userNewCreate] = await User.findOrCreate({
        where:{
            username
        },
        defaults:{
            userFullname,
            userEmail
        }
    })
    const [authNew, authNewCreate] = await Auth.findOrCreate({
        where:{
            userId: userNew.get("id"),
        },
        defaults:{
            username,
            userPassword: getSHA256ofJSON(userPassword)
        }
    })
    return userNewCreate
}

/* User: Authorization */
export async function userAuth(data, TOKEN_SECRET){
    const {username, userPassword} = data
    const auth = await Auth.findOne({
        where:{
            username,
            userPassword: getSHA256ofJSON(userPassword)
        }
    })
    try{
        const data = jwt.sign(
            {
                id: auth.get("userId")
            }, TOKEN_SECRET )
        return data
    }
    catch (e){
        return false
    }
}

/* Me - Data */
export async function userData(userId){
    const data = await User.findByPk(userId)
    return data
}

/* Me - Update */
function cleanUpdate(data){
    const { userFullname, userEmail } = data
    if(userFullname && userEmail){
        return {userFullname, userEmail}
    }
    if(userFullname){
        return {userFullname}
    }
    if(userEmail){
        return {userEmail}
    }
}

/* Me - Update */
export async function userUpdate(userId, data){
    const { userFullname, userEmail } = cleanUpdate(data)    
    const userUpdate = await User.update({
        userFullname,
        userEmail
    }, {
        where: {
            id: userId
        }
    });
    return userUpdate
}

import { Router } from "@vaadin/router"

const API_BASE_URL = process.env.API_HOST

/* State */
const state = {
    /* Data */
    data: { 
        
    },

    listeners: [

    ],

    /* Init */
    init(){
        
    },

    /* State: Actual */
    getState(){
        return this.data
    },

    /* State: Set New State */
    setState(newState){
        this.data = newState
        for (const callback of this.listeners) {
            callback()
        }
    },

    login(username, pass){
        if(!username && !pass){
            return true
        }
    },

    /* Subscribe */
    subscribe(callback: (any) => any){
        this.listeners.push(callback)
    },

}

export { state }
/* Imports */

/* Variables */
const API_BASE_URL = process.env.API_HOST

/* State */
const state = {

    /* Data */
    data: { 
        username: "brunodeleoni",
        userFullname: "Bruno De Leoni",
        userEmail: "bruno@gmail.com"
    },

    /* Listeners */
    listeners: [],

    /* Init */
    init(){},

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
    
    /* Search Active */
    searchActive(search){
        if(search == true){
            return "ACTIVE"
        } else {
            return "DESACTIVE"
        }
    },

    /* Subscribe */
    subscribe(callback: (any) => any){
        this.listeners.push(callback)
    }

}

/* Exports */
export { state }
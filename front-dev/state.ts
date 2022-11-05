const API_BASE_URL = process.env.API_HOST

/* State */
const state = {
    data: { 
        
    },

    listeners: [

    ],

    /* Init */
    init(){
        const localData = localStorage.getItem("data")
        if (localData !== null) {
            this.cleanData()
        }
    },

    /* State Actual */
    getState(){
        return this.data
    },

    /* Set State */
    setState(newState){
        this.data = newState
        for (const callback of this.listeners) {
            callback()
        }
        console.log("newState", this.data)
    },

    /* Saved Data */
    savedData(){
        const currentState = this.getState();
        localStorage.setItem("data", JSON.stringify(currentState));
    },

    /* Subscribe */
    subscribe(callback: (any) => any){
        this.listeners.push(callback)
    },

}

export { state }
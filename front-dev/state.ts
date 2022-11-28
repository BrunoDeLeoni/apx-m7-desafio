/* Variables */
const API_BASE_URL = process.env.API_HOST

/* State */
const state = {

    /* Data */
    data: { 
        token: "",
        username: "",
        userFullname: "",
        userEmail: "",
        petId: "",
        petName: "",
        petActive: true,
        petBreed: "",
        petLocation: "",
        petDescription: "",
        petInfo: "",
        petEmail: "",
    },
    
    /* Listeners */
    listeners: [],

    /* Init */
    init(){
        this.cleanData();
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
    
    /* Usuarios: Crear */
    newUser(dataUser){
        return fetch(API_BASE_URL + "/new-user", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(
                dataUser
            )
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            return data
        })
    },

    /* Usuarios: Login */
    loginUser(dataUser){
        const currentState = this.getState();
        return fetch(API_BASE_URL + "/login", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(
                dataUser
            )
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if(data === false){
                return false
            } else {
                currentState.token = data
                this.setState(currentState)
                this.userData()
                return true
            }
        })
    },

    /* Me: Mi Data */
    userData(){
        const currentState = this.getState();
        const {token} = currentState
        return fetch(API_BASE_URL + "/me", {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                Authorization: `brearer ${token}`,
            }
        })
        .then((res) => {
            return res.json()
        })
        .then((data)=>{
            currentState.username = data.username
            currentState.userFullname = data.userFullname
            currentState.userEmail = data.userEmail
            this.setState(currentState)
        })
    },

    /* Me: Actualizar mi Data */
    userUpdate(dataUser){
        const currentState = this.getState();
        const {token} = currentState
        return fetch(API_BASE_URL + "/me", {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                Authorization: `brearer ${token}`,
            },
            body: JSON.stringify(
                dataUser
            )
        })
        .then((res) => {
            return res.json()
        })
        .then((data)=>{
            if(data[0] === 1){
                this.userData()
            }
            return data
        })
    },

    /* Pet: Nueva mascota perdida */
    newPet(petInfo){
        const currentState = this.getState();
        const {token} = currentState
        return fetch(API_BASE_URL + "/new-pet", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                Authorization: `brearer ${token}`,
            },
            body: JSON.stringify(
                petInfo
            )
        })
        .then((res) => {
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
    },

    /* Pet: Ver mascotas peridas como ghost */
    petVisit(){
        return fetch(API_BASE_URL + "/pet-visit")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            const itemCollections = data.map((item)=>{
                return {
                    // petPhoto: item.petPhoto
                    petName: item.petName,
                    petLocation: item.petLocation
                }
            })
            return itemCollections
        })
    },

    /* Pet: Ver mis reportes de mascotas perdidas */
    petMyReports(){
        const currentState = this.getState();
        const {token} = currentState
        return fetch(API_BASE_URL + "/pet-my-reports", {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                Authorization: `brearer ${token}`,
            }
        })
        .then((res) => {
            return res.json()
        })
        .then((data)=>{
            const itemCollections = data.map((item)=>{
                return {
                    // petPhoto: item.petPhoto
                    id: item.id,
                    petName: item.petName,
                    petLocation: item.petLocation
                }
            })
            return itemCollections
        })
    }, 

    /* Pet: Ver información de una mascota que reporte */
    petMyReportsInfo(petId){
        const currentState = this.getState()
        return fetch(API_BASE_URL + "/pet-my-reports-info/" + petId)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            currentState.petId = data.id,
            currentState.petName = data.petName,
            currentState.petActive = data.petActive,
            currentState.petBreed = data.petBreed,
            currentState.petLocation = data.petLocation,
            currentState.petDescription = data.petDescription
            this.setState(currentState)
        })
    },

    /* Info: Busca la información añadida por otros usuarios */
    petMyReportsInfoAdd(petId){
        const currentState = this.getState();
        return fetch(API_BASE_URL + "/pet-my-reports-info-add", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                Authorization: `brearer ${currentState.token}`
            },
            body: JSON.stringify(
                currentState
            )
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            const itemCollections = data.map((item)=>{
                return {
                    userInfo: item.User.userEmail,
                    petInfo: item.petInfo
                }
            })
            return itemCollections
        })
    },

    /* Pet: Ver las mascotas perdidas activas */
    petReported(){
        return fetch(API_BASE_URL + "/pet-reported")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            const itemCollections = data.map((item)=>{
                return {
                    // petPhoto: item.petPhoto
                    id: item.id,
                    petName: item.petName,
                    petLocation: item.petLocation
                }
            })
            return itemCollections
        })
    },

    /* Pet: Ver información de una mascota reportada */
    petReportedInfo(petId){
        const currentState = this.getState()
        return fetch(API_BASE_URL + "/pet-reported-info/" + petId)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            currentState.petId = data.id,
            currentState.petName = data.petName,
            currentState.petActive = data.petActive,
            currentState.petBreed = data.petBreed,
            currentState.petLocation = data.petLocation,
            currentState.petDescription = data.petDescription,
            currentState.petEmail = data.User.userEmail
            this.setState(currentState)
        })
    },

    /* Pet: Añado informacion a mascota reportada */
    petReportedInfoAdd(petAdd){
        const currentState = this.getState();
        currentState.petInfo = petAdd;
        return fetch(API_BASE_URL + "/pet-reported-info-add", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                Authorization: `brearer ${currentState.token}`,
            },
            body: JSON.stringify(
                currentState
            )
        })
        .then((res) => {
            return res.json()
        })
        .then((data)=>{
            return data
        })
    },

    /* Search Active */
    searchActive(search){
        if(search == true){
            return "ACTIVE"
        } else {
            return "DESACTIVE"
        }
    },

    /* Pet: Status Search */
    changeSearch(){
        const currentState = this.getState();
        return fetch(API_BASE_URL + "/change-search", {
            method: 'put',
            headers: {
                "content-type": "application/json",
                Authorization: `brearer ${currentState.token}`,
            },
            body: JSON.stringify(
                currentState
            )
        })
        .then((res) => {
            return res.json()
        })
        .then((data)=>{
            return true
        })
    },

    /* Subscribe */
    subscribe(callback: (any) => any){
        this.listeners.push(callback)
    },

    /* LocalStorage: Guarda */
    savedData(){
        const currentState = this.getState();
        localStorage.setItem("data", JSON.stringify(currentState));
    },

    /* LocalStorage: Limpia */
    cleanData(){
        this.setState({
            ...this.data,
            token: "",
            username: "",
            userFullname: "",
            userEmail: ""
        })
    },

}

/* Exports */
export { state }
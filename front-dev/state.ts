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
        petPhoto: "",
        petMapLng: "",
        petMapLat: "",
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
    
    /* User: Crear un nuevo usuario */
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

    /* User: Login */
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

    /* User: Mis datos */
    userData(){
        const currentState = this.getState();
        const {token} = currentState
        return fetch(API_BASE_URL + "/me", {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${token}`,
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

    /* User: Actualizar mis datos */
    userUpdate(dataUser){
        const currentState = this.getState();
        const {token} = currentState
        return fetch(API_BASE_URL + "/me", {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${token}`,
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
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify(
                petInfo
            )
        })
        .then((res) => {
            return res.json()
        })
        .then(()=>{
            return true
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
                    petName: item.petName,
                    petLocation: item.petLocation,
                    petPhoto: item.petPhoto
                }
            })
            return itemCollections
        })
    },

    /* Pet: Ver mis mascotas reportadas como perdidas */
    petMyReports(){
        const currentState = this.getState();
        const {token} = currentState
        return fetch(API_BASE_URL + "/pet-my-reports", {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${token}`,
            }
        })
        .then((res) => {
            return res.json()
        })
        .then((data)=>{
            const itemCollections = data.map((item)=>{
                return {
                    id: item.id,
                    petPhoto: item.petPhoto,
                    petName: item.petName,
                    petLocation: item.petLocation
                }
            })
            return itemCollections
        })
    }, 

    /* Info: Ver información de una mascota que reporte */
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
            currentState.petPhoto = data.petPhoto,
            currentState.petDescription = data.petDescription,
            currentState.petMapLng = data.petMapLng,
            currentState.petMapLat = data.petMapLat
            this.setState(currentState)
        })
    },

    /* Info: Busca la información añadida por otros usuarios de una mascota que reporte */
    petMyReportsInfoAdd(petId){
        const currentState = this.getState();
        return fetch(API_BASE_URL + "/pet-my-reports-info-add", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${currentState.token}`
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
                    id: item.id,
                    petPhoto: item.petPhoto,
                    petName: item.petName,
                    petLocation: item.petLocation
                }
            })
            return itemCollections
        })
    },

    /* Info: Ver información de una mascota reportada */
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
            currentState.petPhoto = data.petPhoto,
            currentState.petLocation = data.petLocation,
            currentState.petDescription = data.petDescription,
            currentState.petMapLng = data.petMapLng,
            currentState.petMapLat = data.petMapLat,
            currentState.petEmail = data.User.userEmail
            this.setState(currentState)
        })
    },

    /* Info: Añado informacion a mascota reportada */
    petReportedInfoAdd(petMsg){
        const currentState = this.getState();
        currentState.petInfo = petMsg;
        return fetch(API_BASE_URL + "/pet-reported-info-add", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${currentState.token}`,
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

    /* Verificar si la busqueda de una mascota esta Activa o No */
    searchActive(search){
        if(search == true){
            return "ACTIVE"
        } else {
            return "DESACTIVE"
        }
    },

    /* Pet: Cambiar el estado de una mascota reportada */
    changeSearch(){
        const currentState = this.getState();
        return fetch(API_BASE_URL + "/change-search", {
            method: 'put',
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${currentState.token}`,
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

    /* Info: Envio de Email de notificación */
    sendEmail(){
        const currentState = this.getState();
        return fetch(API_BASE_URL + "/send-email", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                Authorization: `bearer ${currentState.token}`,
            },
            body: JSON.stringify(
                currentState
            )
        })
        .then((data)=>{
            return data
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
            token: ""
        })
    },

}

/* Exports */
export { state }
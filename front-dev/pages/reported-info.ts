/* Imports */
import { Router } from "@vaadin/router";
import { state } from "../state"

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")
let petName, petBreed, petEmail, petDescription, petLocation, petUserEmail, petMap, petPhoto;

/* Class Report */
export class ReportedInfoPage extends HTMLElement {

    /* Connected to Callback */
    connectedCallback(){
        state.subscribe(() => {
            const currentState = state.getState()
            petName = currentState.petName,
            petBreed = currentState.petBreed,
            petLocation = currentState.petLocation,
            petMap = [{lat: "7,29", lon: "7,31"}],
            petDescription = currentState.petDescription,
            petPhoto = "",
            petEmail = currentState.petEmail,

            this.render();
            
        })

        this.render()

    }

    addButtons(){
        /* Sign Out */
        const signout: any = this.querySelector(".out")
        signout.addEventListener("click", ()=>{
            Router.go("/")
        })
        
        /* Back */
        const back: any = this.querySelector(".back")
        back.addEventListener("click", ()=>{
            Router.go("/reported")
        })
        
        const boxInfo: any = this.querySelector(".reported-add__body")
        const openInfo: any = this.querySelector(".open-info")
        const sendInfo: any = this.querySelector(".reported-add__form")
        const closeInfo: any = this.querySelector(".close-info")
        openInfo.addEventListener("click", ()=>{
            boxInfo.style.display = "flex"
        })
        sendInfo.addEventListener("submit", (e)=>{
            e.preventDefault();
            state.petReportedInfoAdd(e.target["info"].value)
            boxInfo.style.display = "none"
        })
        closeInfo.addEventListener("click", ()=>{
            boxInfo.style.display = "none"
        })
    }

    render(){
        this.className = "reported-info"
        this.innerHTML = 
        `
        <div class="reported-info__container">
            <div class="reported-info__header">
                <h3>Reported Info</h3>
                <div class="reported-info__header-main">
                    <img class="reported-info__header-button back" src=${backIMG}>
                    <img class="reported-info__header-button out" src=${signoutIMG}>
                </div>
            </div>
            <div class="reported-add__body">
                <form class="reported-add__form">
                    <label class="reported-add__form-label">
                        <h5 class="reported-add__form-title">Information</h5>
                        <textarea class="reported-add__form-data" name="info" placeholder="Entre al RP4 y RN8, en las cercanias al Anti-Aereo"></textarea>
                    </label>
                    <button class="reported-add__button send-info">Send</button>
                    <button class="reported-add__button close-info">Cancel</button>
                </form>
            </div>
            <div class="reported-info__body">
                <form class="reported-info__form">
                    <label class="reported-info__form-label">
                        <h5 class="reported-info__form-title">Name</h5>
                        <h4 class="reported-info__form-data pet-name">${petName}</h4>
                    </label>
                    <label class="reported-info__form-label">
                        <h5 class="reported-info__form-title">Breed</h5>
                        <h4 class="reported-info__form-data pet-breed">${petBreed}</h4>
                    </label>
                    <label class="reported-info__form-label">
                        <h5 class="reported-info__form-title">Location</h5>
                        <h4 class="reported-info__form-data pet-location">${petLocation}</h4>
                    </label>
                    <label class="reported-info__form-label">
                        <h5 class="reported-info__form-title">Search</h5>
                        <h4 class="reported-info__form-data pet-description">${petDescription}</h4>
                    </label>
                    <label class="reported-info__form-label">
                        <h5 class="reported-info__form-title">Map</h5>
                        <div class="reported-info__form-map pet-map" name="pet-map">${petMap}</div>
                    </label>
                        <label class="reported-info__form-label">
                        <h5 class="reported-info__form-title">Photos</h5>
                        <img class="reported-info__form-photo pet-photo" name="pet-photo" src="${petPhoto}">
                    </label>
                    <label class="reported-info__form-label">
                            <h5 class="reported-info__form-title">Contact</h5>
                            <h4 class="reported-info__form-data pet-email">${petEmail}</h4>
                    </label>
                </form>
                <button class="reported-info__form-button open-info">Add Info</button>
            </div>
            <div class="reported-info__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .reported-info__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .reported-info__header{
            display: flex;
            width: 100%;
            height: 10vh;
            padding: 20px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .reported-info__header-main{
            display: flex;
            gap: 5px;
        }

        .reported-info__header-logo,
        .reported-info__header-button{
            height: 5vh;
        }

        .reported-info__body{
            min-height: 85vh;
            width: 100%;
            padding: 20px;
            gap: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        @media (min-width: 500px){
            .reported-info__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .reported-info__body{
                width: 768px;
            }
        }
        @media (min-width: 1024px){
            .reported-info__body{
                width: 1024px;
            }
        }

        .reported-info__form{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            font-size: 25px            
        }

        .reported-info__form-label{
            width: 100%;
            displat: 
        }
        @media (min-width: 1024px){
            .reported-info__form-label{
                width: 730px;
            }
        }

        .reported-info__form-title{
            font-size: 20px;
            margin: 0 auto;
        }

        .reported-info__form-data{
            margin: 0 auto;
            width: 100%;
            padding: 15px;
            font-size: 25px;
            color: whitesmoke;
            border: none;
            background: #37474f70;
        }

        .reported-info__form-map{
            height: 200px;
            width: 100%;
            background: #37474f70;
        }

        .reported-info__form-photo{
            max-height: 250px;
            max-width: 100%;
            background: #37474f70;
        }

        .reported-info__form-button{
            width: 100%;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 15px;
        }
        @media (min-width: 1024px){
            .reported-info__form-button{
                width: 730px;
            }
        }
               
        .reported-info__footer{
            display: flex;
            height: 5vh;
        }

        .reported-add__body{
            position: sticky;
            top: 10vh;
            display: none;
            min-height: 70vh;
            width: 90%;
            padding: 20px;
            gap: 20px;
            flex-direction: column;
            justify-content: center;
            background-color: #263238;
            box-shadow: 0px 0px 50px 25px #000000bf;
        }
        @media (min-width: 500px){
            .reported-add__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .reported-add__body{
                width: 768px;
            }
        }

        .reported-add__form{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            font-size: 25px            
        }

        .reported-add__form-label{
            width: 100%;
            displat: 
        }
        @media (min-width: 1024px){
            .reported-add__form-label{
                width: 730px;
            }
        }

        .reported-add__form-title{
            font-size: 20px;
            margin: 0 auto;
        }

        .reported-add__form-data{
            width: 100%;
            height: 300px;
            padding: 15px;
            font-size: 25px;
            color: whitesmoke;
            border: none;
            background: #37474f70;
        }
        
        .reported-add__button{
            width: 100%;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 15px;
        }
        @media (min-width: 1024px){
            .reported-add__button{
                width: 730px;
            }
        }

        `
        this.appendChild(style)    
        this.addButtons();    
    }
}

/* Define */
customElements.define("reported-info-page", ReportedInfoPage)

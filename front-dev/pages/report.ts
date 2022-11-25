/* Imports */
import { Router } from "@vaadin/router";
import { state } from "../state"

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")

/* Class Report */
export class ReportPage extends HTMLElement {

    /* Connected to Callback */
    connectedCallback(){
        this.render()

        /* Publicar */
        const publicar: any = this.querySelector(".report__form")
        publicar.addEventListener("submit", (e)=>{
            e.preventDefault();
            const petInfo = {
                petName: e.target["pet-name"].value,
                petBreed: e.target["pet-breed"].value,
                petLocation: e.target["pet-location"].value,
                petDescription: e.target["pet-description"].value,
                // petMap: e.target["pet-map"].value,
                // petPhoto: e.target["pet-photo"].value
            }
            console.log(petInfo)
            state.newPet(petInfo)
            .then(()=>{
                Router.go("/home")
            })
        })

        /* Sign Out */
        const signout: any = this.querySelector(".out")
        signout.addEventListener("click", ()=>{
            Router.go("/")
        })
        
        /* Back */
        const back: any = this.querySelector(".back")
        back.addEventListener("click", ()=>{
            Router.go("/home")
        })
    }

    render(){
        this.className = "report"
        this.innerHTML = 
        `
        <div class="report__container">
            <div class="report__header">
                <h3>Report</h3>
                <div class="report__header-main">
                    <img class="report__header-button back" src=${backIMG}>
                    <img class="report__header-button out" src=${signoutIMG}>
                </div>
            </div>
            <div class="report__body">
                <form class="report__form">
                    <label class="report__form-label">
                        <h5 class="report__form-title">Name</h5>
                        <input class="report__form-data pet-name" name="pet-name" placeholder="Toto">
                    </label>
                    <label class="report__form-label">
                        <h5 class="report__form-title">Breed</h5>
                        <input class="report__form-data pet-breed" name="pet-breed" placeholder="Dog">
                    </label>
                    <label class="report__form-label">
                        <h5 class="report__form-title">Location</h5>
                        <input class="report__form-data pet-location" name="pet-location" placeholder="Córdoba">
                    </label>
                    <label class="report__form-label">
                        <h5 class="report__form-title">Description</h5>
                        <textarea class="report__form-text pet-description" name="pet-description" placeholder="Mastin Napolitano. Gris. 4 ños. Collar de cuero."></textarea>
                    </label>
                    <label class="report__form-label">
                        <h5 class="report__form-title">Map</h5>
                        <div class="report__form-map pet-map" name="pet-map"></div>
                    </label>
                    <label class="report__form-label">
                        <h5 class="report__form-title">Upload Photo</h5>
                        <div class="report__form-photo pet-photo" name="pet-photo"></div>
                    </label>
                    <button class="report__body-button public">Public</button>
                </form>
            </div>
            <div class="report__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .report__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .report__header{
            display: flex;
            width: 100%;
            height: 10vh;
            padding: 20px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between
        }
        
        .report__header-main{
            display: flex;
            gap: 5px;
        }

        .report__header-logo,
        .report__header-button{
            height: 5vh;
        }

        .report__body{
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
            .report__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .report__body{
                width: 768px;
            }
        }
        @media (min-width: 1024px){
            .report__body{
                width: 1024px;
            }
        }

        .report__form{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            font-size: 25px            
        }

        .report__form-label{
            width: 100%;
            displat: 
        }
        @media (min-width: 1024px){
            .report__form-label{
                width: 730px;
            }
        }

        .report__form-title{
            font-size: 20px;
            margin: 0 auto;
        }

        .report__form-data{
            width: 100%;
            padding: 15px;
            font-size: 25px;
            color: whitesmoke;
            border: none;
            background: #37474f70;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .report__form-text{
            height: 100px;
            width: 100%;
            padding: 10px;
            font-size: 15px;
            color: whitesmoke;
            border: none;
            background: #37474f70;
        }

        .report__form-map{
            height: 200px;
            width: 100%;
            background: #37474f70;
        }

        .report__form-photo{
            height: 200px;
            width: 100%;
            background: #37474f70;
            border: dashed #607d8b;
        }

        .report__body-button{
            width: 100%;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 15px;
        }
        @media (min-width: 1024px){
            .report__body-button{
                width: 730px;
            }
        }

        .report__footer{
            display: flex;
            height: 5vh;
        }

        `
        this.appendChild(style)    
    }
}

/* Define */
customElements.define("report-page", ReportPage)

/* Imports */
import { Router } from "@vaadin/router";

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")
let petName, petLocation, petPhoto;

/* Class My Data */
export class MyReportsPage extends HTMLElement {

    /* Connected to Callback */
    connectedCallback(){
        this.render()

        /* Ver Mas */
        const verMas: any = this.querySelector(".ver-mas")
        verMas.addEventListener("click", ()=>{
            Router.go("/reports/info")
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
        /* Temporal */
        petName = "Toto"
        petLocation = "Córdoba"
        petPhoto = require("url:../assets/temp-perro.png");

        this.className = "my-reports"
        this.innerHTML = 
        `
        <div class="my-reports__container">
            <div class="my-reports__header">
                <h3>My Reports</h3>
                <div class="my-reports__header-main">
                    <img class="my-reports__header-button back" src=${backIMG}>
                    <img class="my-reports__header-button out" src=${signoutIMG}>
                </div>
            </div>

            <div class="my-reports__body">
                
                <div class="my-reports__body-box">
                    <img class="my-reports__body-box-img" src="${petPhoto}">
                    <div class="my-reports__body-box-info">
                        <h4 class="my-reports__body-box-info-title">${petName}</h4>
                        <h6 class="my-reports__body-box-info-subtitle">${petLocation}</h6>
                    </div>
                    <h6 class="my-reports__body-box-info-subtitle ver-mas">ver mas...</h6>
                </div>

            </div>
            <div class="my-reports__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .my-reports__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .my-reports__header{
            display: flex;
            width: 100%;
            height: 10vh;
            padding: 20px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .my-reports__header-main{
            display: flex;
            gap: 5px;
        }

        .my-reports__header-logo,
        .my-reports__header-button{
            height: 5vh;
        }

        .my-reports__body{
            min-height: 85vh;
            width: 100%;
            padding: 20px;
            display: flex;
            gap: 20px;
            flex-direction: column;
            align-items: center;
        }
        @media (min-width: 500px){
            .my-reports__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .my-reports__body{
                width: 768px;
                display: grid;
                grid-template-columns: auto auto;
                justify-items: center;
            }
        }
        @media (min-width: 1024px){
            .my-reports__body{
                width: 1024px;
                display: grid;
                grid-template-columns: auto auto auto;
                justify-items: center;
            }
        }

        .my-reports__body-box{
            background: #455a6475;
            width: 250px;
        }

        .my-reports__body-box-img{
            height: 150px;
            width: 250px
        }

        .my-reports__body-box-info{
            min-height: 50px;
            padding: 10px;
        }
        
        .my-reports__body-box-info-title,
        .my-reports__body-box-info-subtitle{
            margin: 0 auto;
        }

        .ver-mas{
            text-align: end;
        }
        
        .my-reports__footer{
            display: flex;
            height: 5vh;
        }
        `
        this.appendChild(style)    
    }
}

/* Define */
customElements.define("my-reports-page", MyReportsPage)

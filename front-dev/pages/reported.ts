/* Imports */
import { Router } from "@vaadin/router";

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")

/* Class Reported */
export class ReportedPage extends HTMLElement {

    /* Connected to Callback */
    connectedCallback(){
        this.render()

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
        this.className = "reported"
        this.innerHTML = 
        `
        <div class="reported__container">
            <div class="reported__header">
                <div class="reported__header-main">
                    <img class="reported__header-button back" src=${backIMG}>
                    <img class="reported__header-button out" src=${signoutIMG}>
                </div>
            </div>
            <div class="reported__body">
            </div>
            <div class="reported__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .reported__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .reported__header{
            display: flex;
            width: 100%;
            height: 10vh;
            padding: 20px;
            flex-direction: row-reverse;
            align-items: center;
        }
        
        .reported__header-main{
            display: flex;
            gap: 5px;
        }

        .reported__header-logo,
        .reported__header-button{
            height: 5vh;
        }

        .reported__body{
            min-height: 85vh;
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        @media (min-width: 500px){
            .reported__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .reported__body{
                width: 768px;
            }
        }
        @media (min-width: 1024px){
            .reported__body{
                width: 1024px;
            }
        }

        .reported__footer{
            display: flex;
            height: 5vh;
        }

        `
        this.appendChild(style)    
    }
}

/* Define */
customElements.define("reported-page", ReportedPage)

/* Imports */
import { Router } from "@vaadin/router";

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")

/* Class My Data */
export class MyReportsPage extends HTMLElement {

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
        this.className = "my-reports"
        this.innerHTML = 
        `
        <div class="my-reports__container">
            <div class="my-reports__header">
                <div class="my-reports__header-main">
                    <img class="my-reports__header-button back" src=${backIMG}>
                    <img class="my-reports__header-button out" src=${signoutIMG}>
                </div>
            </div>
            <div class="my-reports__body">
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
            flex-direction: row-reverse;
            align-items: center;
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
            flex-direction: column;
            justify-content: space-evenly;
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
            }
        }
        @media (min-width: 1024px){
            .my-reports__body{
                width: 1024px;
            }
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

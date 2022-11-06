/* Imports */
import { Router } from "@vaadin/router";

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")

/* Class Report */
export class ReportPage extends HTMLElement {

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
        this.className = "report"
        this.innerHTML = 
        `
        <div class="report__container">
            <div class="report__header">
                <div class="report__header-main">
                    <img class="report__header-button back" src=${backIMG}>
                    <img class="report__header-button out" src=${signoutIMG}>
                </div>
            </div>
            <div class="report__body">
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
            flex-direction: row-reverse;
            align-items: center;
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

/* Imports */
import { Router } from "@vaadin/router";
import { state } from "../state";

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")

/* Class Reported */
export class ReportedGhostPage extends HTMLElement {

    /* Connected to Callback */
    connectedCallback(){
        this.render()

        /* List Items */
        const list: any = this.querySelector(".reported__body")
        list.innerHTML = 
        `
        <div class="reported__body-container">
            <div class="reported__body-box">
                <img class="reported__body-box-img" src="">
                <div class="reported__body-box-info">
                    <h4 class="reported__body-box-info-title"></h4>
                    <h6 class="reported__body-box-info-subtitle"></h6>
                </div>
            </div>
        </div>
        `

        /* Add Items */
        /* BUG: Al cargar los archivos en la base de datos me repite el ultimo item */
        state.petVisit()
        .then((item)=>{
            const template: any = this.querySelector(".reported__body-box");
            const container: any = this.querySelector(".reported__body-container");
            item.forEach(i => {
                template.querySelector(".reported__body-box-img").src = i.petPhoto;
                template.querySelector(".reported__body-box-info-title").textContent = i.petName;
                template.querySelector(".reported__body-box-info-subtitle").textContent = i.petLocation;
                const clone = document.importNode(template, true);
                container.appendChild(clone);
            })
        })
        
        /* Back */
        const back: any = this.querySelector(".back")
        back.addEventListener("click", ()=>{
            Router.go("/")
        })

    }
    
    render(){
        this.className = "reported"
        this.innerHTML = 
        `
        <div class="reported__container">
            <div class="reported__header">
            <h3>Reported Visit</h3>
                <div class="reported__header-main">
                    <img class="reported__header-button back" src=${backIMG}>
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
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .reported__header-main{
            display: flex;
            gap: 5px;
        }

        .reported__header-logo,
        .reported__header-button{
            height: 5vh;
        }

        .reported__body-container{
            min-height: 85vh;
            width: 100%;
            padding: 20px;
            display: flex;
            gap: 20px;
            flex-direction: column;
            align-items: center;
        }
        @media (min-width: 500px){
            .reported__body-container{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .reported__body-container{
                width: 768px;
                display: grid;
                grid-template-columns: auto auto;
                justify-items: center;
            }
        }
        @media (min-width: 1024px){
            .reported__body-container{
                width: 1024px;
                display: grid;
                grid-template-columns: auto auto auto;
                justify-items: center;
            }
        }

        .reported__body-box{
            background: #455a6475;
            width: 250px;
        }

        .reported__body-box-img{
            height: 150px;
            width: 250px
        }

        .reported__body-box-info{
            min-height: 50px;
            padding: 10px;
        }
        
        .reported__body-box-info-title,
        .reported__body-box-info-subtitle{
            margin: 0 auto;
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
customElements.define("reported-ghost-page", ReportedGhostPage)

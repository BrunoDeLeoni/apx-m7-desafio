/* Imports */
import { Router } from "@vaadin/router";

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")
let userUsername, userFullname, userEmail;

/* Class My Data */
export class MyDataUpdatePage extends HTMLElement {

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

        /* Save */
        const save: any = this.querySelector(".save")
        save.addEventListener("click", ()=>{
            console.log("click-tmp-sin-acción-save")
        })
        
        /* Cancel */
        const cancel: any = this.querySelector(".cancel")
        cancel.addEventListener("click", ()=>{
            Router.go("/user")
        })
    }

    render(){
        /* Temporal */
        userUsername = "brunodeleoni"
        userFullname = "Barbara De Leoni, Bruno"
        userEmail = "brunobarbaradeleoni@gmail.com"

        this.className = "my-data"
        this.innerHTML = 
        `
        <div class="my-data-update__container">
            <div class="my-data-update__header">
                <div class="my-data__header-main">
                    <img class="my-data-update__header-button back" src=${backIMG}>
                    <img class="my-data-update__header-button out" src=${signoutIMG}>
                </div>
            </div>
            <div class="my-data-update__body">
                <form class="my-data-update__body-form">
                    <label class="my-data-update__body-label">
                        <h5 class="my-data-update__body-title">USERNAME</h5>
                        <input class="my-data-update__body-data user-data" name="update-name">
                    </label>
                    <label class="my-data-update__body-label">
                        <h5 class="my-data-update__body-title">FULLNAME</h5>
                        <input class="my-data-update__body-data fullname-data" name="update-fullname">
                    </label>
                    <label class="my-data-update__body-label">
                        <h5 class="my-data-update__body-title">EMAIL</h5>
                        <input class="my-data-update__body-data email-data" name="update-email">
                    </label>
                </form>
                <div class="my-data-update__body-button-container">
                    <button class="my-data-update__body-button save">SAVE</button>
                    <button class="my-data-update__body-button cancel">CANCEL</button>
                </div>
            </div>
            <div class="my-data-update__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .my-data-update__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .my-data-update__header{
            display: flex;
            width: 100%;
            height: 10vh;
            padding: 20px;
            flex-direction: row-reverse;
            align-items: center;
        }
        
        .my-data-update__header-main{
            display: flex;
            gap: 5px;
        }

        .my-data-update__header-logo,
        .my-data-update__header-button{
            height: 5vh;
        }

        .my-data-update__body{
            min-height: 85vh;
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
        }
        @media (min-width: 500px){
            .my-data-update__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .my-data-update__body{
                width: 768px;
            }
        }
        @media (min-width: 1024px){
            .my-data-update__body{
                width: 1024px;
            }
        }

        .my-data-update__body-form{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            font-size: 25px;
        }

        .my-data-update__body-label{
            width: 100%;
        }

        .my-data-update__body-title{
            margin: 0 auto;
        }
        
        .my-data-update__body-data{
            width: 100%;
            padding: 10px;
            font-size: 25px;
            color: whitesmoke;
            border: none;
            background: #5e5e5e3b;
        }

        .my-data-update__body-button-container{
            display: flex;
            gap: 10%;
            padding: 20px;
            width: 100%;
            justify-content: space-around;
        }

        .my-data-update__body-button{
            width: 100%;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 15px;
        }

        .my-data-update__footer{
            display: flex;
            height: 5vh;
        }

        `
        this.appendChild(style)    
    }
}

/* Define */
customElements.define("my-data-update-page", MyDataUpdatePage)

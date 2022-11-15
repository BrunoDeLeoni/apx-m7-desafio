/* Imports */
import { Router } from "@vaadin/router";
import { state } from "../state"

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")
let userUsername, userFullname, userEmail;

/* Class My Data */
export class MyDataPage extends HTMLElement {

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
        
        /* Update */
        const update: any = this.querySelector(".my-data__body-update")
        update.addEventListener("click", ()=>{
            Router.go("/user/update")
        })
    }

    render(){
        /* Temporal */
        userUsername = state.getState().username
        userFullname = state.getState().userFullname
        userEmail = state.getState().userEmail

        this.className = "my-data"
        this.innerHTML = 
        `
        <div class="my-data__container">
            <div class="my-data__header">
                <h3>My Data</h3>
                <div class="my-data__header-main">
                    <img class="my-data__header-button back" src=${backIMG}>
                    <img class="my-data__header-button out" src=${signoutIMG}>
                </div>
            </div>
            <div class="my-data__body">
                <div class="my-data__body-info">
                    <label class="my-data__body-label">
                        <h5 class="my-data__body-title">USERNAME</h5>
                        <h4 class="my-data__body-data user-data">${userUsername}</h4>
                    </label>
                    <label class="my-data__body-label">
                        <h5 class="my-data__body-title">FULLNAME</h5>
                        <h4 class="my-data__body-data fullname-data">${userFullname}</h4>
                    </label>
                    <label class="my-data__body-label">
                        <h5 class="my-data__body-title">EMAIL</h5>
                        <h4 class="my-data__body-data email-data">${userEmail}</h4>
                    </label>
                </div>
                <div class="my-data__body-button-container">
                    <button class="my-data__body-update">SET INFO</button>
                </div>
            </div>
            <div class="my-data__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .my-data__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .my-data__header{
            display: flex;
            width: 100%;
            height: 10vh;
            padding: 20px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .my-data__header-main{
            display: flex;
            gap: 5px;
        }

        .my-data__header-logo,
        .my-data__header-button{
            height: 5vh;
        }

        .my-data__body{
            min-height: 85vh;
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
        }
        @media (min-width: 500px){
            .my-data__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .my-data__body{
                width: 768px;
            }
        }
        @media (min-width: 1024px){
            .my-data__body{
                width: 1024px;
            }
        }

        .my-data__body-info{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            font-size: 25px;
        }

        .my-data__body-label{
            width: 100%;
        }

        .my-data__body-title{
            font-size: 20px;
            margin: 0 auto;
        }
        
        .my-data__body-data{
            margin: 0 auto;
            padding: 10px;
            background: #37474f70;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .my-data__body-button-container{
            display: flex;
            justify-content: center;
        }

        .my-data__body-update{
            width: 100%;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 15px;
        }
        @media (min-width: 768px){
            .my-data__body-update{
                width: 730px;
            }
        }

        .my-data__footer{
            display: flex;
            height: 5vh;
        }

        `
        this.appendChild(style)    
    }
}

/* Define */
customElements.define("my-data-page", MyDataPage)

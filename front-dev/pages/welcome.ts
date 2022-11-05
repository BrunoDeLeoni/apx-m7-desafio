/* Imports */
import { Router } from "@vaadin/router"

/* Varibales */
const style = document.createElement("style")
const logoIMG = require("url:../assets/logo.png")
const loginIMG = require("url:../assets/login.png")
const instagramIMG = require("url:../assets/instagram.png")
const githubIMG = require("url:../assets/github.png")
const linkedinIMG = require("url:../assets/linkedin.png")
const titleIMG = require("url:../assets/title.png")

/* Class Welcome */
export class WelcomePage extends HTMLElement {

    /* Connected to CallBack */
    connectedCallback(){
        this.render()

        /* Main: Open/Close */
        const main: any = this.querySelector(".welcome__header-main-mobile")
        const openMain: any = this.querySelector(".open")
        const closeMain: any = this.querySelector(".back")
        openMain.addEventListener("click", ()=>{
            main.style.display = "flex"
        })
        closeMain.addEventListener("click", ()=>{
            main.style.display = "none"
        })
        
        /* Login/Register: Mobile */
        const loginMobile: any = this.querySelector(".loginMobile")
        const registerMobile: any = this.querySelector(".registerMobile")
        loginMobile.addEventListener("click", ()=>{
            Router.go("/login")
        })
        registerMobile.addEventListener("click", ()=>{
            Router.go("/register")
        })

        /* Login/Register: Mobile */
        const loginDesktop: any = this.querySelector(".loginDesktop")
        const registerDesktop: any = this.querySelector(".registerDesktop")
        loginDesktop.addEventListener("click", ()=>{
            Router.go("/login")
        })
        registerDesktop.addEventListener("click", ()=>{
            Router.go("/register")
        })
    }

    render(){
        this.className = "welcome"
        this.innerHTML = 
        `
        <div class="welcome__container">
            <div class="welcome__header">
                <img class="welcome__header-logo" src=${logoIMG}>
                <img class="welcome__header-login-mobile open" src=${loginIMG}>
                <div class="welcome__header-login-desktop">
                    <a class="welcome__header-main-button-desktop loginDesktop">LOGIN</a>
                    <a class="welcome__header-main-button-desktop registerDesktop">REGISTER</a>
                </div>
            </div>
            <div class="welcome__body">
                <div class="welcome__header-main-mobile">
                    <a class="welcome__header-main-button-mobile loginMobile">LOGIN</a>
                    <a class="welcome__header-main-button-mobile registerMobile">REGISTER</a>
                    <a class="welcome__header-main-button-mobile back">BACK</a>
                </div>
                <div class="welcome__body-sup">
                    <img class="welcome__body-sup-title" src=${titleIMG}>
                </div>
                <div class="welcome__body-inf">
                    <h4 class="welcome__body-inf-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, nihil reprehenderit. Ut, aspernatur dolor quo eveniet a odio tenetur quaerat optio culpa minus perferendis distinctio doloremque laudantium quae, tempora hic?</h4>
                </div>
            </div>
            <div class="welcome__footer">
                <a class="welcome__footer-link" href="http://instagram.com/brunodeleoni"><img src="${instagramIMG}"></a>
                <a class="welcome__footer-link" href="http://github.com/brunodeleoni"><img src="${githubIMG}"></a>
                <a class="welcome__footer-link" href="https://ar.linkedin.com/in/bruno-barbara-de-leoni"><img src="${linkedinIMG}"></a>
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .welcome__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;       
        }
        
        .welcome__header{
            display: flex;
            height: 10vh;
            width: 100%;
            padding: 20px;
            background-color: #263238;
            align-items: center;
            justify-content: space-between;
        }
        
        .welcome__header-logo,
        .welcome__header-login-mobile{
            height: 5vh;
        }
        @media (min-width: 768px){
            .welcome__header-login-mobile{
                display: none;
            }
        }

        .welcome__header-login-desktop{
            display: none;
        }
        @media (min-width: 768px){
            .welcome__header-login-desktop{
                display: flex;
                gap: 20px;
                font-size: 20px;
            }
        }

        .welcome__header-main-mobile{
            width: 80%;
            height: 50vh;
            background-color: #263238;
            border-radius: 20px;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            position: absolute;
            box-shadow: 0px 0px 50px 60px #191919;
            display: none;
        }
        @media (min-width:390px){
            .welcome__header-main-mobile{
                max-width: 360px;
            }
        }

        .welcome__header-main-button-mobile{
            font-family: 'Poppins';
            font-size: 40px;
            color: darkgray;
        }

        .welcome__body{
            min-height: 80vh;
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        @media (min-width:600px) {
            .welcome__body{
                max-width: 600px;
            }
        }
        
        .welcome__body-sup{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .welcome__body-inf{
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        .welcome__body-sup-title{
            height: 35vh;
        }
        @media (min-width: 768px){
            .welcome__body-sup-title{
                height: 45vh;
            }
        }

        .welcome__body-inf-text{
            margin: 0 auto;
            padding: 5px;
        }

        .welcome__footer{
            display: flex;
            height: 10vh;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }
        `
        this.appendChild(style)

    }
}

/* Define */
customElements.define("welcome-page", WelcomePage)
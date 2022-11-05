/* Imports */
import { Router } from "@vaadin/router"

/* Varibales */
const style = document.createElement("style")
const logoIMG = require("url:../assets/logo.png")
const loginIMG = require("url:../assets/login.png")
const instagramIMG = require("url:../assets/instagram.png")
const githubIMG = require("url:../assets/github.png")
const linkedinIMG = require("url:../assets/linkedin.png")
const mapIMG = require("url:../assets/map.png")

/* Class Welcome */
export class WelcomePage extends HTMLElement {
    /* Connected to CallBack */
    connectedCallback(){
        this.render()

        /* Open or Close Main */
        const main: any = this.querySelector(".welcome__header-main-mobile")
        const openMain = this.querySelector(".open")
        const closeMain = this.querySelector(".back")
        openMain?.addEventListener("click", ()=>{
            main.style.display = "flex"
        })
        closeMain?.addEventListener("click", ()=>{
            main.style.display = "none"
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
            </div>
            <div class="welcome__body">
                <div class="welcome__header-main-mobile">
                    <a class="welcome__header-main-button-mobile login">LOGIN</a>
                    <a class="welcome__header-main-button-mobile register">REGISTER</a>
                    <a class="welcome__header-main-button-mobile back">BACK</a>
                </div>
                <div class="welcome__body-sup">
                    <h1 class="welcome__body-title">Where is my dog?</h1>
                    <img class="welcome__body-map" src=${mapIMG}>
                </div>
                <div class="welcome__body-inf">
                    <h2 class="welcome__body-subtitle">What are the odds of finding a lost dog?</h2>
                    <h5 class="welcome__body-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, nihil reprehenderit. Ut, aspernatur dolor quo eveniet a odio tenetur quaerat optio culpa minus perferendis distinctio doloremque laudantium quae, tempora hic?</h5>
                </div>
                </div>
            <div class="welcome__footer">
            <a class="welcome__footer-link" href="http://instagram.com/brunodeleoni"><img src="${instagramIMG}"></a>
            <a class="welcome__footer-link" href="http://github.com/brunodeleoni"><img src="${githubIMG}"></a>
            <a class="welcome__footer-link" href="http://linkedin.com/brunobarbaradeleoni"><img src="${linkedinIMG}"></a>
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
        }
        
        .welcome__header{
            display: flex;
            height: 10vh;
            padding: 20px;
            background-color: #77777790;
            align-items: center;
            justify-content: space-between;
        }
        
        .welcome__header-logo{
            height: 5vh;
        }

        .welcome__header-login-mobile{
            height: 5vh;
        }
        @media (min-width: 768px){
            .welcome__header-login-mobile{
                display: none;
            }
        }

        .welcome__header-main-mobile{
            width: 80%;
            height: 50vh;
            background-color: #303437;
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
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        @media (min-width:600px) {
            .welcome__body{
                max-width: 600px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
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
        
        .welcome__body-title{
            margin: 0 auto;
            text-align: center;
        }

        .welcome__body-map{
            height: 20vh;
        }

        .welcome__body-subtitle,
        .welcome__body-text{
            margin: 0 auto;
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
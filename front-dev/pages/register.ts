/* Imports */
import { Router } from "@vaadin/router"

/* Varibales */
const style = document.createElement("style")
const logoIMG = require("url:../assets/logo.png")

/* Class Register */
export class RegisterPage extends HTMLElement {

    /* Connected to CallBack */
    connectedCallback(){
        this.render()

        const register: any = this.querySelector(".register")
        const back: any = this.querySelector(".back")
        register.addEventListener("click", ()=>{
            Router.go("/home")
        })
        back.addEventListener("click", ()=>{
            Router.go("/")
        })
    }

    render(){
        this.className = "register"
        this.innerHTML = 
        `
        <div class="register__container">
            <div class="register__header">
            </div>
            <div class="register__body">
                <div class="register__body-logo">
                    <img class="register__body-logo-img" src=${logoIMG}>
                </div>
                <form class="register__body-form">
                    <label class="register__body-label username">
                        <h3 class="register__body-title username-title">Username</h6>
                        <input class="register__body-input username-input" type="text" name="username-name">
                    </label>
                    <label class="register__body-label fullname">
                        <h3 class="register__body-title fullname-title">Fullname</h6>
                        <input class="register__body-input fullname-input" type="text" name="fullname-name">
                    </label>
                    <label class="register__body-label email">
                        <h3 class="register__body-title email-title">Email</h6>
                        <input class="register__body-input email-input" type="email" name="email-name">
                    </label>
                    <label class="register__body-label pass">
                        <h3 class="register__body-title pass-title">Password</h6>
                        <input class="register__body-input pass-input" type="password" name="password-name">
                    </label>
                    <label class="register__body-label confirmation">
                        <h3 class="register__body-title confirmation-title">Confirmation Password</h6>
                        <input class="register__body-input confimation-input" type="password">
                    </label>
                    <div class="register__body-button">
                        <button class="register__body-button-form register">REGISTER</button>
                        <button class="register__body-button-form back">BACK</button>
                    </div>
                </form>
            </div>
            <div class="register__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .register__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;          
        }
        
        .register__header{
            display: flex;
            height: 10vh;
        }
        
        .register__body{
            min-height: 80vh;
            width: 320px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background: #263238;
            border-radius: 25px;
            box-shadow: 0px 0px 50px 60px #191919;
        }
        @media (min-width: 565px){
            .register__body{
                width: 400px;
            }
        }
        @media (min-width: 768px){
            .register__body{
                width: 500px;
            }
        }

        .register__body-form{
            width: 90%;
            gap: 15px;
            display: flex;
            flex-direction: column;
        }
        
        .register__body-logo{
            display: flex;
            justify-content: center;
            padding: 5px;
        }
            
        .register__body-logo-img{
            height: 10vh;
        }

        .register__body-label{
            font-size: 15px;
        }

        .register__body-title{
            margin: 0 auto;
        }
        
        .register__body-input{
            width: 100%;
            padding: 5px;
            font-size: 15px;
            color: whitesmoke;
            border: none;
            background: #5e5e5e3b;
        }
        
        .register__body-button{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .register__body-button-form{
            width: 100%;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 15px;
        }

        .register__footer{
            display: flex;
            height: 10vh;
        }
        `
        this.appendChild(style)

    }
}

/* Define */
customElements.define("register-page", RegisterPage)

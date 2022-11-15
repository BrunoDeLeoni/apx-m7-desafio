/* Imports */
import { Router } from "@vaadin/router"

/* Varibales */
const style = document.createElement("style")
const logoIMG = require("url:../assets/logo.png")

/* Class Login */
export class LoginPage extends HTMLElement {

    /* Connected to CallBack */
    connectedCallback(){
        this.render()

        const login: any = this.querySelector(".login")
        const back: any = this.querySelector(".back")
        login.addEventListener("click", ()=>{
            console.log("Login")
            Router.go("/home")
        })
        back.addEventListener("click", ()=>{
            Router.go("/")
        })
    }

    render(){
        this.className = "login"
        this.innerHTML = 
        `
        <div class="login__container">
            <div class="login__header">
            </div>
            <div class="login__body">
                <div class="login__body-logo">
                    <img class="login__body-logo-img" src=${logoIMG}>
                </div>
                <form class="login__body-form">
                    <label class="login__body-label username">
                        <h3 class="login__body-title username-title">USERNAME</h6>
                        <input class="login__body-input username-input" type="text" name="username-name">
                    </label>
                    <label class="login__body-label pass">
                        <h3 class="login__body-title pass-title">PASSWORD</h6>
                        <input class="login__body-input pass-input" type="password" name="password-name">
                    </label>
                    <label class="login__body-button">
                        <button class="login__body-button-form login">LOGIN</button>
                        <button class="login__body-button-form back">BACK</button>
                    </label>
                </form>
            </div>
            <div class="login__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .login__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;      
        }
        
        .login__header{
            display: flex;
            height: 20vh;
        }
        
        .login__body{
            min-height: 50vh;
            width: 320px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background: #263238;
            border-radius: 25px;
            box-shadow: 0px 0px 50px 25px #000000bf;
        }

        .login__body-form{
            width: 90%;
            gap: 15px;
            display: flex;
            flex-direction: column;
        }
        
        .login__body-logo{
            display: flex;
            justify-content: center;
            padding: 5px;
        }
            
        .login__body-logo-img{
            height: 10vh;
        }

        .login__body-label{
            font-size: 15px;
        }

        .login__body-title{
            font-size: 15px;
            margin: 0 auto;
        }
        
        .login__body-input{
            width: 100%;
            padding: 5px;
            font-size: 15px;
            color: whitesmoke;
            border: none;
            background: #5e5e5e3b;
        }
        
        .login__body-button{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .login__body-button-form{
            width: 100%;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 15px;
        }

        .login__footer{
            display: flex;
            height: 20vh;
        }
        `
        this.appendChild(style)

    }
}

/* Define */
customElements.define("login-page", LoginPage)

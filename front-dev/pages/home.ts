/* Imports */
import { Route, Router } from "@vaadin/router";

/* Variables */
const style = document.createElement("style")
const logoIMG = require("url:../assets/logo.png")
const signoutIMG = require("url:../assets/signout.png")
const mapIMG = require("url:../assets/map.png")

/* Class Home */
export class HomePage extends HTMLElement {

    /* Connected to Callback */
    connectedCallback(){
        this.render()

        const signout: any = this.querySelector(".out")
        signout.addEventListener("click", ()=>{
            Router.go("/")
        })
    }

    render(){
        this.className = "home"
        this.innerHTML = 
        `
        <div class="home__container">
            <div class="home__header">
                <img class="home__header-logo" src=${logoIMG}>
                <img class="home__header-signout out" src=${signoutIMG}>
            </div>
            <div class="home__body">
                <button class="home__body-button my-data">My Data</button>
                <button class="home__body-button my-reports">My Reports</button>
                <button class="home__body-button reported">Reported</button>
                <button class="home__body-button report">Report</button>
                <img class="home__body-img" src=${mapIMG}>
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .home__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .home__header{
            display: flex;
            width: 100%;
            height: 10vh;
            padding: 20px;
            background-color: #263238;
            align-items: center;
            justify-content: space-between;
        }
        
        .home__header-logo,
        .home__header-signout{
            height: 5vh;
        }

        .home__body{
            min-height: 90vh;
            width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        @media (min-width: 565px){
            .home__body{
                width: 400px;
            }
        }
        @media (min-width: 768px){
            .home__body{
                width: 500px;
            }
        }

        .home__body-button{
            width: 100%;
            height: 80px;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #eeeeee;
            font-size: 25px;
        }

        .home__body-img{
            width: 100%;
        }
        `
        this.appendChild(style)    
    }
}

/* Define */
customElements.define("home-page", HomePage)
/* Imports */
import { Router } from "@vaadin/router";

/* Variables */
const style = document.createElement("style")
const logoIMG = require("url:../assets/logo.png")
const signoutIMG = require("url:../assets/signout.png")

/* Class Home */
export class HomePage extends HTMLElement {

    /* Connected to Callback */
    connectedCallback(){
        this.render()

        /* Sign Out */
        const signout: any = this.querySelector(".out")
        signout.addEventListener("click", ()=>{
            Router.go("/")
        })

        /* My Data */
        const myData: any = this.querySelector(".my-data")
        myData.addEventListener("click", ()=>{
            Router.go("/user")
        })

        /* My Reports */
        const myReports: any = this.querySelector(".my-reports")
        myReports.addEventListener("click", ()=>{
            Router.go("/reports")
        })

        /* Report */
        const report: any = this.querySelector(".report")
        report.addEventListener("click", ()=>{
            Router.go("/report")
        })

        /* Reported */
        const reported: any = this.querySelector(".reported")
        reported.addEventListener("click", ()=>{
            Router.go("/reported")
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
                <button class="home__body-button my-data">MY DATA</button>
                <button class="home__body-button my-reports">MY REPORTS</button>
                <button class="home__body-button report">REPORT</button>
                <button class="home__body-button reported">REPORTED</button>
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
            gap: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        @media (min-width: 500px){
            .home__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .home__body{
                width: 768px;
            }
        }
        @media (min-width: 1024px){
            .home__body{
                width: 1024px;
            }
        }

        .home__body-button{
            width: 100%;
            height: 130px;
            padding: 10px;
            border: none;
            border-radius: 10px;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 25px;
        }
        `
        this.appendChild(style)    
    }
}

/* Define */
customElements.define("home-page", HomePage)
/* Imports */
import { Router } from "@vaadin/router";
import { state } from "../state";
import * as mapboxgl from "mapbox-gl";

/* Variables */
const style = document.createElement("style")
const backIMG = require("url:../assets/back.png")
const signoutIMG = require("url:../assets/signout.png")
let petName, petBreed, petLocation, petDescription, petMapLng, petMapLat, petPhoto, petSearch;

/* Class Report */
export class MyReportsInfoPage extends HTMLElement {

    /* Connected to Callback */
    connectedCallback(){

        state.subscribe(() => {
            const currentState = state.getState()
            petName = currentState.petName,
            petBreed = currentState.petBreed,
            petLocation = currentState.petLocation,
            petMapLng = currentState.petMapLng,
            petMapLat = currentState.petMapLat,
            petDescription = currentState.petDescription,
            petPhoto = currentState.petPhoto,
            petSearch = state.searchActive(currentState.petActive),
            
        /* BUG: Al cargar los archivos en la base de datos me repite el ultimo item */
        state.petMyReportsInfoAdd(currentState.petId)
            .then((item)=>{
                const template: any = this.querySelector(".my-reports-info__info-div");
                const container: any = this.querySelector(".my-reports-info__info");
                for (const i of item){
                    template.querySelector(".my-reports-info__info-title").textContent = i.userInfo;
                    template.querySelector(".my-reports-info__info-data").textContent = i.petInfo;
                    const clone = document.importNode(template, true);
                    container.appendChild(clone);
                }
            })
            
            this.render();
            
            /* BUG: Al ejecutarse el 'subscribe' donde se ejecuta 'map()' por primera vez
            todo funciona normal, pero al querer volver a entrar a alguna pesataña de una mascota
            perdida o cierro y vuelvo a iniciar sessión me genera un error y
            no me deja avanzar */
            console.log("mapa")            
            this.map();
        })
        
        this.render();
        
    }
    
    /* MapBox */
    map(){
        const MAPBOX_TOKEN = process.env.TOKEN_MAPBOX;
        /* MapBox: HTML */
        const mapContainer: any = this.querySelector(".map-container");
        mapContainer.innerHTML = 
        `
        <link href="//api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css" rel="stylesheet"/>
        <label class="my-reports-info__form-label">
            <h5 class="my-reports-info__form-title">Map</h5>
            <div class="my-reports-info__form-map pet-map" name="pet-map" id="map"></div>
        </label>
        `
        /* MapBox: Mapa */
        function initMap(){
            mapboxgl.accessToken = MAPBOX_TOKEN;
            const map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/streets-v11",
            })
            return map;
        }
        /* MapBox: Run */
        (()=>{
            let map = initMap();
            const marker = new mapboxgl.Marker()
            .setLngLat([petMapLng, petMapLat])
            .addTo(map)
            map.setCenter([petMapLng, petMapLat]);
            map.setZoom(14);
        })();
    }

    addButtons(){
        /* Search Active/Desactive */
        const search: any = this.querySelector(".search-desactive")
        search.addEventListener("click", ()=>{
            state.changeSearch()
            Router.go("/reports")
        })

        /* Sign Out */
        const signout: any = this.querySelector(".out")
        signout.addEventListener("click", ()=>{
            Router.go("/")
        })
        
        /* Back */
        const back: any = this.querySelector(".back")
        back.addEventListener("click", ()=>{
            Router.go("/reports")
        })
    }

    render(){
        this.className = "my-reports-info"
        this.innerHTML = 
        `
        <div class="my-reports-info__container">
            <div class="my-reports-info__header">
                <h3>My Reports Info</h3>
                <div class="my-reports-info__header-main">
                    <img class="my-reports-info__header-button back" src=${backIMG}>
                    <img class="my-reports-info__header-button out" src=${signoutIMG}>
                </div>
            </div>
            <div class="my-reports-info__body">
                <form class="my-reports-info__form">
                    <label class="my-reports-info__form-label">
                        <h5 class="my-reports-info__form-title">Name</h5>
                        <h4 class="my-reports-info__form-data pet-name">${petName}</h4>
                    </label>
                    <label class="my-reports-info__form-label">
                        <h5 class="my-reports-info__form-title">Breed</h5>
                        <h4 class="my-reports-info__form-data pet-breed">${petBreed}</h4>
                    </label>
                    <label class="my-reports-info__form-label">
                        <h5 class="my-reports-info__form-title">Location</h5>
                        <h4 class="my-reports-info__form-data pet-location">${petLocation}</h4>
                    </label>
                    <label class="my-reports-info__form-label">
                        <h5 class="my-reports-info__form-title">Description</h5>
                        <h4 class="my-reports-info__form-data pet-description">${petDescription}</h4>
                    </label>
                    <div class="map-container">
                    </div>
                    <label class="my-reports-info__form-label">
                        <h5 class="my-reports-info__form-title">Photos</h5>
                        <img class="my-reports-info__form-photo pet-photo" src="${petPhoto}">
                    </label>
                    <label class="my-reports-info__form-label">
                        <h5 class="my-reports-info__form-title">Search</h5>
                        <h4 class="my-reports-info__form-data pet-search">${petSearch}</h4>
                    </label>
                </form>
                <button class="my-reports-info__form-button search-desactive">Change Search</button>
                </br> 
                <h2>Reports Info</h2>
                <div class="my-reports-info__info info">
                    <div class="my-reports-info__info-div">
                        <h5 class="my-reports-info__info-title" name="info-user"></h5>
                        <h4 class="my-reports-info__info-data" name="info-description"></h4>
                    </div>
                </div>
            </div>
            <div class="my-reports-info__footer">
            </div>
        </div>
        `
        style.innerHTML = 
        `
        .my-reports-info__container{
            font-family: 'Poppins', sans-serif;
            color: whitesmoke;
            max-width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .my-reports-info__header{
            display: flex;
            width: 100%;
            height: 10vh;
            padding: 20px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        
        .my-reports-info__header-main{
            display: flex;
            gap: 5px;
        }

        .my-reports-info__header-logo,
        .my-reports-info__header-button{
            height: 5vh;
        }

        .my-reports-info__body{
            min-height: 85vh;
            width: 100%;
            padding: 20px;
            gap: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        @media (min-width: 500px){
            .my-reports-info__body{
                width: 500px;
            }
        }
        @media (min-width: 768px){
            .my-reports-info__body{
                width: 768px;
            }
        }
        @media (min-width: 1024px){
            .my-reports-info__body{
                width: 1024px;
            }
        }

        .my-reports-info__form{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            font-size: 25px            
        }

        .my-reports-info__form-label{
            width: 100%;
            displat: 
        }
        @media (min-width: 1024px){
            .my-reports-info__form-label{
                width: 730px;
            }
        }

        .my-reports-info__form-title{
            font-size: 20px;
            margin: 0 auto;
        }

        .my-reports-info__form-data{
            margin: 0 auto;
            width: 100%;
            padding: 15px;
            font-size: 25px;
            color: whitesmoke;
            border: none;
            background: #37474f70;
        }

        .my-reports-info__form-map{
            height: 200px;
            width: 100%;
            background: #37474f70;
        }

        .my-reports-info__form-photo{
            max-height: 250px;
            max-width: 100%;
            background: #37474f70;
        }

        .my-reports-info__form-button{
            width: 100%;
            padding: 10px;
            border: none;
            background: #607d8b;
            color: #e0e0e0;
            font-size: 15px;
        }
        @media (min-width: 1024px){
            .my-reports-info__form-button{
                width: 730px;
            }
        }

        .my-reports-info__info{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            font-size: 25px
        }
        .my-reports-info__info-div{
            width: 100%;
        }
        @media (min-width: 1024px){
            .my-reports-info__info-div{
                width: 730px;
            }
        }
        
        .my-reports-info__info-title{
            font-size: 20px;
            margin: 0 auto;
        }

        .my-reports-info__info-data{
            margin: 0 auto;
            width: 100%;
            padding: 15px;
            font-size: 25px;
            color: whitesmoke;
            border: none;
            background: #37474f70;
        }
                
        .my-reports-info__footer{
            display: flex;
            height: 5vh;
        }

        .map-container{
            width: 100%;
        }
        @media (min-width: 1024px){
            .map-container{
                width: 730px;
            }
        }

        .mapboxgl-control-container{
            display: none;
        }
        `
        this.appendChild(style)
        this.addButtons();
    }
}

/* Define */
customElements.define("my-reports-info-page", MyReportsInfoPage)

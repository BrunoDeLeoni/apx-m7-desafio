/* Imports */
import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(`.root`))
router.setRoutes([
    {path: `/`, component: `welcome-page`}, /* Pagina de Inicio */
    {path: `/login`, component: `login-page`}, /* Pagina para Loguearse */
    {path: `/register`, component: `register-page`}, /* Pagina para Registrarse */
    {path: `/home`, component: `home-page`}, /* Pagina del Usuario */
    {path: `/user`, component: `my-data-page`}, /* Datos del Usuario */
    {path: `/user/update`, component: `my-data-update-page`}, /* Datos del Usuario para Actualizar */
    {path: `/report`, component: `report-page`}, /* Reportar una Mascota Perdida */
    {path: `/reports`, component: `my-reports-page`}, /* Mis Mascotas Reportadas */
    {path: `/reports/info`, component: `my-reports-info-page`}, /* Informacion de Mis Mascotas Reportadas */
    {path: `/reported`, component: `reported-page`}, /* Mascotas Reportadas */
    {path: `/reported/info`, component: `reported-info-page`}, /* Informacion de Mascotas Reportadas */
    {path: `/visit`, component: `reported-ghost-page`}, /* Mascotas Perdidas Sin Loguearse */
])
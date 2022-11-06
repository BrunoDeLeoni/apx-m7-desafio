/* Imports */
import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(`.root`))
router.setRoutes([
    {path: `/`, component: `welcome-page`},
    {path: `/login`, component: `login-page`},
    {path: `/register`, component: `register-page`},
    {path: `/home`, component: `home-page`},
    {path: `/user`, component: `my-data-page`},
    {path: `/reports`, component: `my-reports-page`},
    {path: `/report`, component: `report-page`},
    {path: `/reported`, component: `reported-page`},
    {path: `/user/update`, component: `my-data-update-page`},
])
/* Imports */
import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(`.root`))
router.setRoutes([
    {path: `/`, component: `welcome-page`},
    {path: `/login`, component: `login-page`},
    {path: `/register`, component: `register-page`},
    {path: `/home`, component: `home-page`},
    {path: `/user`, component: `my-data-page`},
    {path: `/user/update`, component: `my-data-update-page`},
    {path: `/report`, component: `report-page`},
    {path: `/reports`, component: `my-reports-page`},
    {path: `/reports/info`, component: `my-reports-info-page`},
    {path: `/reported`, component: `reported-page`},
    {path: `/reported/info`, component: `reported-info-page`},
    {path: `/visit`, component: `reported-ghost-page`},
])
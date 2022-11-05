/* Imports */
import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(`.root`))
router.setRoutes([
    {path: `/`, component: `welcome-page`},
    {path: `/login`, component: `login-page`},
    {path: `/register`, component: `register-page`},
    {path: `/home`, component: `home-page`},
])
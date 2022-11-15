import "./pages/welcome"
import "./pages/login"
import "./pages/register"
import "./pages/home"
import "./pages/my-data"
import "./pages/my-data-update"
import "./pages/report"
import "./pages/my-reports"
import "./pages/my-reports-info"
import "./pages/reported"
import "./pages/reported-info"
import "./pages/reported-ghost"
import "./router"
import { state } from "./state"

(() => {
    state.init();
})()
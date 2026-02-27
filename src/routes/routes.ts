import { Router } from "express"
import { loginController } from "../controllers/auth.controller.ts"
import { dashboardController } from "../controllers/dashboard.controller.ts"
import { rotaProtegida } from "../middlewares/auth.middleware.ts"

const router = Router()

router.post("/login", loginController)

router.get("/dashboard", rotaProtegida, dashboardController)

export { router }
import { Router } from "express"
import { loginController } from "../controllers/auth.controller.ts"
import { dashboardController } from "../controllers/dashboard.controller.ts"
import { rotaProtegida } from "../middlewares/auth.middleware.ts"
import { usersController } from "../controllers/users.controller.ts"

const router = Router()

router.post("/login", loginController)

router.get("/dashboard", rotaProtegida, dashboardController)

router.get("/users", usersController)

export { router }
import { loginService } from "../services/auth.service.ts"

export function loginController(req: any, res: any) {
    try {
        const { email } = req.body

        const resultado = loginService(email)

        return res.json(resultado)

    } catch (error: any) {
        return res.status(400).json({ erro: error.message })
    }
}
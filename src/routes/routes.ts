import { Router } from "express"

const router = Router()

// ROTA PÚBLICA
router.post("/login", (req, res) => {
    const { email } = req.body

    if (!email) {
        return res.status(400).json({ erro: "Email obrigatório" })
    }

    // Simulação de login
    if (!email.endsWith("@empresa.com")) {
        return res.status(403).json({ erro: "Domínio não permitido" })
    }

    return res.json({ mensagem: "Login permitido", token: "TOKEN123" })
})

export { router }

function rotaProtegida(req: any, res: any, next: any) {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ erro: "Não autenticado" })
    }

    if (token !== "TOKEN123") {
        return res.status(403).json({ erro: "Token inválido" })
    }

    next()
}

router.get("/dashboard", rotaProtegida, (req, res) => {
    res.json({ mensagem: "Você está na rota protegida" })
})
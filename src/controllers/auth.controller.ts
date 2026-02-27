export function loginController(req: any, res: any) {
    const { email } = req.body

    if (!email) {
        return res.status(400).json({ erro: "Email obrigatório" })
    }

    if (!email.endsWith("@empresa.com")) {
        return res.status(403).json({ erro: "Domínio não permitido" })
    }

    return res.json({ mensagem: "Login permitido", token: "TOKEN123" })
}
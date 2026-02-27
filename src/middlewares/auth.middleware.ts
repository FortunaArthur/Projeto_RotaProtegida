export function rotaProtegida(req: any, res: any, next: any) {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ erro: "Não autenticado" })
    }

    if (token !== "TOKEN123") {
        return res.status(403).json({ erro: "Token inválido" })
    }

    next()
}
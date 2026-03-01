import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export function rotaProtegida(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ erro: "Não autenticado" })
    }

    const parts = authHeader.split(" ")

    if (parts.length !== 2) {
        return res.status(401).json({ erro: "Token mal formatado" })
    }

    const [scheme, token] = parts

    if (scheme !== "Bearer") {
        return res.status(401).json({ erro: "Token mal formatado" })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        )

        // opcional: guardar usuário no request
        ;(req as any).user = decoded

        return next()

    } catch (error) {
        return res.status(401).json({ erro: "Token inválido ou expirado" })
    }
}
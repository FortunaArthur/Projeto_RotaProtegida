import { usersService } from "../services/users.service.ts"

export async function usersController(req: any, res: any) {
    try {
        const users = await usersService()
        return res.json(users)
    } catch (error: any) {
        return res.status(500).json({ erro: "Erro ao buscar usuários" })
    }
}
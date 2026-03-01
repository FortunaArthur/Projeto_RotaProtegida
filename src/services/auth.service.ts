import dotenv from "dotenv";
import jwt from "jsonwebtoken"

dotenv.config({
    path: "./src/connection/env/.env",
    quiet: true
});

export function loginService(email: string) {
    if (!email) {
        throw new Error("Email obrigatório")
    }

    if (!email.endsWith("@empresa.com")) {
        throw new Error("Domínio não permitido")
    }

    const token = jwt.sign(
        { email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
    )

    return {
        mensagem: "Login permitido",
        token
    }
}
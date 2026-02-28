export function loginService(email: string) {
    if (!email) {
        throw new Error("Email obrigatório")
    }

    if (!email.endsWith("@empresa.com")) {
        throw new Error("Domínio não permitido")
    }

    return {
        mensagem: "Login permitido",
        token: "TOKEN123"
    }
}
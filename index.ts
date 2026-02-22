import { app } from "./src/server/server.ts"

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})
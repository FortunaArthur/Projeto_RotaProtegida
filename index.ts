import { app } from "./src/server/server.js"

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})
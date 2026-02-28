import dotenv from "dotenv";
import express from "express";
import {router} from "../routes/routes.ts"; // 👈 ajuste o caminho se necessário

const app = express();
app.use(express.json());

// 🔗 Ligação das rotas
app.use("/api", router);

dotenv.config({
    path: "./src/connection/env/.env",
    quiet: true
});
const PORT = Number(process.env.PORT);

export async function startServer() {
    try {
        app.listen(PORT, () => {
        console.log(`🚀 Server rodando na porta ${PORT} \n`);
        });

    } catch (error) {
        console.error("❌ Falha ao iniciar aplicação:", error);
    }
}
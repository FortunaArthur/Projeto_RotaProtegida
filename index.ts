import { startServer } from "./src/server/server";
import { connectDatabase } from "./src/connection/database/connect";

async function bootstrap() {
    // conexão
    console.log("🔌 Conectando ao banco de dados...");
    await connectDatabase();
    // servidor
    console.log("🔌 Iniciando servidor...");
    await startServer()
}

bootstrap();
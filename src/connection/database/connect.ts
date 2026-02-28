import mysql from "mysql2/promise";
import { env } from "../env/env";

const db = mysql.createPool({
    host: env.dbHost,
    port: env.dbPort,
    user: env.dbUser,
    password: env.dbPassword,
    database: env.dbName,
});

export async function connectDatabase() {
    try {
        await db.getConnection();
        console.log("✅ Banco conectado \n");
    } catch (error) {
        console.error("❌ Erro ao conectar no banco:", error);
    }
}
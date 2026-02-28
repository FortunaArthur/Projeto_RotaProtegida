import dotenv from "dotenv";

dotenv.config({
    path: "./src/connection/env/.env",
    quiet: true
});

export const env = {
    dbHost: process.env.DB_HOST!,
    dbPort: Number(process.env.DB_PORT),
    dbUser: process.env.DB_USER!,
    dbPassword: process.env.DB_PASSWORD!,
    dbName: process.env.DB_NAME!,
};
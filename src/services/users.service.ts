import { db } from "../connection/database/connect.ts";

export async function usersService() {
    const [rows] = await db.execute("SELECT id, name, email, created_at, updated_at FROM users;")
    return rows
}
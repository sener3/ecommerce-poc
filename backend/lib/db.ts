import { PrismaClient } from "@/prisma/generated/client"

const db = new PrismaClient()

export * from "@/prisma/generated/client"
export default db

import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
};

const prismadb = globalThis.prisma || new PrismaClient();
// Avoid creating multiple instances of prisma which could lead to resource leaks
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb
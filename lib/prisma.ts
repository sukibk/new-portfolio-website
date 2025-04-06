/* The re-assignment ensures that in a non-production environment
(like during development or testing), only one instance of the Prisma client
is created and reused across the entire application. This approach prevents
the overhead of repeatedly initializing new connections to the database every
time a module that needs database access is imported. */
import { PrismaClient } from "@prisma/client";

declare global {
  var __database__: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__database__) {
    global.__database__ = new PrismaClient();
  }
  prisma = global.__database__;
}

export default prisma;

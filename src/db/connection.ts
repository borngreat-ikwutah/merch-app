import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import postgres from "postgres";
import { env } from "~/env";

const connectionString = env.DATABASE_URL;

// console.log("Connecting to database at:", connectionString);

// Create the Neon Structure
const client = neon(connectionString);

// Create the drizzle instance
export const db = drizzle({
  client: client,
});

export type DB = typeof db;

export { client };

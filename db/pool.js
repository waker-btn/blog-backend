import { Pool } from "pg";
import "dotenv/config.js";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default pool;

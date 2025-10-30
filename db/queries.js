import pool from "./pool.js";

async function getAuthors() {
  const { rows } = await pool.query("SELECT * FROM authors");
  return rows;
}

export { getAuthors };

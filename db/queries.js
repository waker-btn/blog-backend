import pool from "./pool.js";

async function getAuthors() {
  const { rows } = await pool.query("SELECT author_id, name, bio, date_joined FROM authors");
  return rows;
}

export { getAuthors };

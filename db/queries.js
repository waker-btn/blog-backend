import pool from "./pool.js";

async function getAuthors() {
  const { rows } = await pool.query("SELECT author_id, name, bio, date_joined FROM authors");
  return rows;
}

async function getAuthorById (authorId) {
  const { rows } = await pool.query(
    "SELECT author_id, name, bio, date_joined FROM authors WHERE author_id = $1",
    [authorId]
  );
  return rows[0];
}

export { getAuthors, getAuthorById };

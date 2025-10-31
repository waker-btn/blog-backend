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

async function createAuthor(authorObj) {
  const {name, email, password, bio} = authorObj;
  const queryText = 'INSERT INTO authors (name, email, password, bio, date_joined) VALUES ($1, $2, $3, $4, NOW()) RETURNING author_id';
  const res = await pool.query(queryText, [name, email, password, bio]);
  return res.rows[0].author_id;
}

async function getPosts() {
  const { rows } = await pool.query("SELECT blog.blog_post_id, author.name, blog.title, blog.post, blog.date_written FROM blog_posts AS blog JOIN blog_authors ON blog.blog_post_id = blog_authors.blog_post_id JOIN authors AS author ON blog_authors.author_id = author.author_id GROUP BY blog.blog_post_id, author.name");
  return rows;
}

async function getPostById (postId) {
  const { rows } = await pool.query(
    "SELECT blog.blog_post_id, author.name, blog.title, blog.post, blog.date_written FROM blog_posts AS blog JOIN blog_authors ON blog.blog_post_id = blog_authors.blog_post_id JOIN authors AS author ON blog_authors.author_id = author.author_id WHERE blog.blog_post_id = $1 GROUP BY blog.blog_post_id, author.name",
    [postId]
  );
  return rows[0];
}

export { getAuthors, getAuthorById, getPosts, getPostById, createAuthor };

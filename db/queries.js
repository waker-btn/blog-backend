import pool from "./pool.js";

async function getAuthors() {
  const { rows } = await pool.query(
    "SELECT author_id, name, bio, date_joined FROM authors"
  );
  return rows;
}

async function getAuthorById(authorId) {
  const { rows } = await pool.query(
    "SELECT author_id, name, bio, date_joined FROM authors WHERE author_id = $1",
    [authorId]
  );
  return rows;
}

async function createAuthor(authorObj) {
  const { name, email, password, bio } = authorObj;
  const queryText =
    "INSERT INTO authors (name, email, password, bio, date_joined) VALUES ($1, $2, $3, $4, NOW()) RETURNING author_id";
  const res = await pool.query(queryText, [name, email, password, bio]);
  return res.rows[0].author_id;
}

async function getPosts() {
  const { rows } = await pool.query(
    "SELECT blog.blog_post_id, author.name, blog.title, blog.post, blog.date_written FROM blog_posts AS blog JOIN blog_authors ON blog.blog_post_id = blog_authors.blog_post_id JOIN authors AS author ON blog_authors.author_id = author.author_id GROUP BY blog.blog_post_id, author.name"
  );
  return rows;
}

async function getPostById(postId) {
  const { rows } = await pool.query(
    "SELECT blog.blog_post_id, author.name, blog.title, blog.post, blog.date_written FROM blog_posts AS blog JOIN blog_authors ON blog.blog_post_id = blog_authors.blog_post_id JOIN authors AS author ON blog_authors.author_id = author.author_id WHERE blog.blog_post_id = $1 GROUP BY blog.blog_post_id, author.name",
    [postId]
  );
  return rows;
}

async function createPost(postObj) {
  const { author_id, title, summary, post } = postObj;
  const insertPost =
    "INSERT INTO blog_posts (title, summary, post, date_written) VALUES ($1, $2, $3, NOW()) RETURNING blog_post_id;";
  const insertLink =
    "INSERT INTO blog_authors (blog_post_id, author_id) VALUES ($1, $2);";

  const postRes = await pool.query(insertPost, [title, summary, post]);
  const blog_post_id = postRes.rows[0].blog_post_id;

  await pool.query(insertLink, [blog_post_id, author_id]);

  return blog_post_id;
}

async function authCheckEmail(email) {
  const queryText = "SELECT author_id FROM authors WHERE email = $1;";
  const res = await pool.query(queryText, [email]);
  return res.rows[0];
}

async function authCheckPassword(authorId, password) {
  const queryText =
    "SELECT author_id FROM authors WHERE author_id = $1 AND password = $2;";
  const res = await pool.query(queryText, [authorId, password]);
  return res.rows[0];
}

async function deletePost(postId) {
  const deletePost =
    "DELETE FROM blog_posts WHERE blog_post_id = $1 RETURNING blog_post_id;";
  const res = await pool.query(deletePost, [postId]);
  return res.rows;
}

async function deleteAuthor(authorId) {
  const deleteAuthor =
    "DELETE FROM authors WHERE author_id = $1 RETURNING author_id;";
  const res = await pool.query(deleteAuthor, [authorId]);
  return res.rows;
}

export {
  getAuthors,
  getAuthorById,
  getPosts,
  getPostById,
  createAuthor,
  createPost,
  authCheckEmail,
  authCheckPassword,
  deletePost,
  deleteAuthor,
};

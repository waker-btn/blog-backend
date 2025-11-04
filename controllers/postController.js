import { getPosts, getPostById, createPost } from "../db/queries.js";

async function getPostsFromDB(req, res) {
  const posts = await getPosts();
  console.log("Posts: ", posts);
  res.status(200).json(posts);
}

async function getPostByIdFromDB(req, res) {
  const postId = parseInt(req.params.id);
  const post = await getPostById(postId);

  if (post.length === 0) {
    return res.status(404).send("Post not found");
  }
  console.log("Post: ", post);
  res.status(200).json(post);
}

async function createPostInDB(req, res) {
  const postData = req.body;
  const newPostId = await createPost(postData);

  res.status(201).send(`Post created with ID: ${newPostId}`);
}

export { getPostsFromDB, getPostByIdFromDB, createPostInDB };
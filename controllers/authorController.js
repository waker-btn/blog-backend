import { getAuthors, getAuthorById, createAuthor} from "../db/queries.js";

async function getAuthorsFromDB(req, res) {
  const authors = await getAuthors();
  console.log("Authors: ", authors);
  res.status(200).json(authors);
}

async function getAuthorByIdFromDB(req, res) {
  const authorId = parseInt(req.params.id);
  const author = await getAuthorById(authorId);

  if (author.length === 0) {
    return res.status(404).send("Author not found");
  }
  console.log("Author: ", author);
  res.status(200).json(author);
}

async function createAuthorInDB(req, res) {
  const authorData = req.body;
  const newAuthorId = await createAuthor(authorData);
  res.status(201).send(`Author created with ID: ${newAuthorId}`);
}


export { getAuthorsFromDB, getAuthorByIdFromDB, createAuthorInDB };

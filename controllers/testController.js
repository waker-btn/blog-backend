import { getAuthors } from "../db/queries.js";

async function getAuthorsFromDB(req, res) {
  const authors = await getAuthors();
  console.log("Authors: ", authors);
  res.status(200).json(authors);
}

export { getAuthorsFromDB };

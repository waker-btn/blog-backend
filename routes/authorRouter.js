import { Router } from "express";
import { getAuthorsFromDB, getAuthorByIdFromDB, createAuthorInDB } from "../controllers/authorController.js";
import { validateAuthorKeys } from "../middleware/validateBody.js";

const authorRouter = Router();

authorRouter.get("/", getAuthorsFromDB);
authorRouter.get("/:id", getAuthorByIdFromDB);
authorRouter.post("/", validateAuthorKeys, createAuthorInDB);

export default authorRouter;
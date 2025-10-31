import { Router } from "express";
import { getAuthorsFromDB, getAuthorByIdFromDB, createAuthorInDB } from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.get("/", getAuthorsFromDB);
authorRouter.get("/:id", getAuthorByIdFromDB);
authorRouter.post("/", createAuthorInDB);

export default authorRouter;
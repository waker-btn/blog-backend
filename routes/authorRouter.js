import { Router } from "express";
import { getAuthorsFromDB, getAuthorByIdFromDB } from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.get("/", getAuthorsFromDB);
authorRouter.get("/:id", getAuthorByIdFromDB);

export default authorRouter;
import { Router } from "express";
import { getAuthorsFromDB } from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.get("/", getAuthorsFromDB);

export default authorRouter;
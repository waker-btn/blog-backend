import { Router } from "express";
import { getAuthorsFromDB } from "../controllers/testController.js";

const authorRouter = Router();

authorRouter.get("/", getAuthorsFromDB);

export default authorRouter;
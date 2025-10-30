import { Router } from "express";
import { getPostsFromDB, getPostByIdFromDB } from "../controllers/postController.js";

const postRouter = Router();

postRouter.get("/", getPostsFromDB);
postRouter.get("/:id", getPostByIdFromDB);

export default postRouter;
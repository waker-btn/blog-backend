import { Router } from "express";
import { getPostsFromDB, getPostByIdFromDB, createPostInDB } from "../controllers/postController.js";
import { validatePostKeys } from "../middleware/validateBody.js";
import { authenticateUser } from "../middleware/authenticateUser.js";

const postRouter = Router();

postRouter.get("/", getPostsFromDB);
postRouter.get("/:id", getPostByIdFromDB);
postRouter.post("/", authenticateUser, validatePostKeys, createPostInDB);

export default postRouter;
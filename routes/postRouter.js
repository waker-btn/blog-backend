import { Router } from "express";
import {
  getPostsFromDB,
  getPostByIdFromDB,
  createPostInDB,
  deletePostInDB,
} from "../controllers/postController.js";
import { validatePostKeys } from "../middleware/validateBody.js";
import { authenticateUser } from "../middleware/authenticateUser.js";

const postRouter = Router();

postRouter.get("/", getPostsFromDB);
postRouter.get("/:id", getPostByIdFromDB);
postRouter.post("/", authenticateUser, validatePostKeys, createPostInDB);
postRouter.delete("/:id", authenticateUser, deletePostInDB);

export default postRouter;

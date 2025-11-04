import { Router } from "express";
import {
  getPostsFromDB,
  getPostByIdFromDB,
  createPostInDB,
  deletePostInDB,
  updatePostInDB,
} from "../controllers/postController.js";
import {
  validatePostKeys,
  validatePostKeysSingular,
} from "../middleware/validateBody.js";
import { authenticateUser } from "../middleware/authenticateUser.js";

const postRouter = Router();

postRouter.get("/", getPostsFromDB);
postRouter.get("/:id", getPostByIdFromDB);
postRouter.post("/", authenticateUser, validatePostKeys, createPostInDB);
postRouter.delete("/:id", authenticateUser, deletePostInDB);
postRouter.patch(
  "/:id",
  authenticateUser,
  validatePostKeysSingular,
  updatePostInDB
);

export default postRouter;

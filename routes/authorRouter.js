import { Router } from "express";
import { getAuthorsFromDB, getAuthorByIdFromDB, createAuthorInDB, deleteAuthorInDB} from "../controllers/authorController.js";
import { validateAuthorKeys } from "../middleware/validateBody.js";
import { authenticateUser } from "../middleware/authenticateUser.js";

const authorRouter = Router();

authorRouter.get("/", getAuthorsFromDB);
authorRouter.get("/:id", getAuthorByIdFromDB);
authorRouter.post("/", validateAuthorKeys, createAuthorInDB);
authorRouter.delete("/:id", authenticateUser, deleteAuthorInDB);

export default authorRouter;
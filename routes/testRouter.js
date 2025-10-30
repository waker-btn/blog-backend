import { Router } from "express";
import { getAuthorsFromDB } from "../controllers/testController.js";

const testRouter = Router();

testRouter.get("/", (req, res) => {
  res.status(200).json({ lorem: "ipsum" });
});

testRouter.get("/authors", getAuthorsFromDB);

export default testRouter;
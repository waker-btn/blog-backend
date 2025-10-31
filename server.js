import express from "express";
import "dotenv/config.js";
import authorRouter from "./routes/authorRouter.js";
import postRouter from "./routes/postRouter.js";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./api-docs/api.yaml');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/posts", postRouter);
app.use("/authors", authorRouter);
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});
app.all("*splat", (req, res) => {
    res.status(404).send("404 Page Not Found");
});

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

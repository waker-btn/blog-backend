import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Sample Blog",
    description:
      "This is a sample API designed for learning and practice purposes. It provides basic functionality for managing blog posts and their authors. <br><br>Users can create, read, update, and delete blog posts, as well as manage authors.<br><br>Each author can have multiple posts, and each post can have multiple authors.<br><br>Blog posts can also have tags assigned to them which Users can work with.<br><br>**Features:**<br><br>**Intended Use:**<br><br>This API is intended for educational or demonstration use, such as testing backend development skills, learning RESTful API design, or integrating with frontend applications.",
    version: "1.0.0",
  },
  servers: {
    url: "https://blog-backend-production-82fa.up.railway.app/",
    description: "Production server",
  },
};

const outputFile = "./api.json";
const routes = ["../server.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);

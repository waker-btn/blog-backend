# Blog Backend API

A RESTful API backend for a blog platform built with **Node.js**, **Express.js** and **PostgreSQL**. This service provides endpoints for managing blog posts and authors with basic authentication.

## Features

- 📝 Blog post management (CRUD operations)
- 👥 Author management
- 📚 Swagger API documentation
- 🎯 Input validation middleware
- 📊 PostgreSQL database integration

## Technologies

- Node.js (v18 or higher recommended)
- PostgreSQL database
- npm or yarn package manager

## Tech Stack

- Express.js - Web framework
- PostgreSQL - Database
- cors - CORS middleware
- dotenv - Environment configuration
- swagger-ui-express - API documentation
- swagger-autogen - Swagger generation

## API Documentation

You can access the Swagger API documentation at:

```
https://blog-backend-production-82fa.up.railway.app/api-docs
```

## API Endpoints

### Posts

- `GET /posts` - Get all blog posts
- `GET /posts/:id` - Get a specific blog post
- `POST /posts` - Create a new blog post
- `PATCH /posts/:id` - Update a blog post
- `DELETE /posts/:id` - Delete a blog post

### Authors

- `GET /authors` - Get all authors
- `GET /authors/:id` - Get a specific author
- `POST /authors` - Create a new author
- `DELETE /authors/:id` - Delete an author

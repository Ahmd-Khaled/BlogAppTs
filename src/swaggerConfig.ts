import { Options } from "swagger-jsdoc";
import path from "path";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
  },
  apis: [
    path.join(__dirname, "Modules/Auth/auth.controller.{ts,js}"), // Auth module
    path.join(__dirname, "Modules/Blog/blog.controller.{ts,js}"), // Blog module
    path.join(__dirname, "app.controller.{ts,js}"), // Main controller
  ],
};

export default swaggerOptions;

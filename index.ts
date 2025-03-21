import express, { Application } from "express";
import { config } from "dotenv";
import { bootstrap } from "./src/app.controller";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./src/swaggerConfig";

config();
const port: number | string = process.env.PORT || 5000;

const app: Application = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

bootstrap(app);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Swagger Docs available at: http://localhost:${port}/api-docs`);
});
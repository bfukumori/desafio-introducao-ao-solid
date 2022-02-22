import express from "express";
import { serve, setup } from "swagger-ui-express";

import swaggerDoc from "./openapi.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", serve, setup(swaggerDoc));

export { app };

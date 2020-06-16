import express from "express";
import path from "path";
import routes from "./routes";
import cors from "cors";
import { errors } from 'celebrate';
const app = express();

//set domains that are allowed to access the backend
app.use(cors());

//using json on reading of the request body
app.use(express.json());

//using routes from routes.ts
app.use(routes);

//creating a route for access images
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

//for deal with erros
app.use(errors());

//listening on 3333 port
app.listen(3333);

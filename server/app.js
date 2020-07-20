import express from "express";
import router from "./routes";
import cors from "cors";
import helmet from "helmet";

export const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(router);

import express from "express";
import passport from "passport";
import router from "./routes";
import cors from "cors";
import helmet from "helmet";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

// Not caching on the client side
app.use(helmet.noCache());

app.use(router);

app.use(passport.initialize());

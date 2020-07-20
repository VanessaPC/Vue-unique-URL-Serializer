import { Router } from "express";
import { AppStartUp } from "../controllers/index";
import { UrlController } from "../controllers/url";
import UID from "./constants";

const router = new Router();

router.get(UID.BASE, AppStartUp);

// export default function getRoutes() {
//   // create a router for all the routes of our app
//   // const router = express.Router();
//   router.use("/", (req, res) => res.send("URL Shortener API"));
//   // any additional routes would go here
//   return router;
// }
export default router;

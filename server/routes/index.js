import { Router } from "express";
import { AppStartUp } from "../controllers/index";
import { UrlController } from "../controllers/url";
import UID from "./constants";

const router = new Router();

router.get(UID.BASE, AppStartUp);
router.post(UID.ACTIONS.SAVE_URL, UrlController.saveUrlUID);
router.get(UID.ACTIONS.GET_URLS, UrlController.getUrlUID);

export default router;

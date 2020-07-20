import { model } from "mongoose";
import { urlModuleName } from "./constants";
import { UrlSchema } from "../schemas/url";

export const Url = model(urlModuleName, UrlSchema);

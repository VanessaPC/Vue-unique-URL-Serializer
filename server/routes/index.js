import express from "express";

export default function getRoutes() {
  console.log("here???");
  // create a router for all the routes of our app
  const router = express.Router();
  router.use("/", (req, res) => res.send("URL Shortener API"));
  // any additional routes would go here
  return router;
}

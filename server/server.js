import { LOCAL_PORT } from "./config/constants";
import http from "http";
import { app } from "./app";
import { connectDb } from "./models";

const port = process.env.PORT || LOCAL_PORT;
const server = http.createServer(app);

connectDb().then(async () => {
  server.listen(port, () =>
    console.log(
      `<--------------------------- URL-UUID server listening on port ${port}! --------------------------------->`
    )
  );
});

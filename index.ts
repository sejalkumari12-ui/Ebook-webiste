import { config } from "./src/config/config.ts";
import app from "./src/app.ts";

const startServer = () => {
  const port = config.port;
  app.listen(port, () => console.log(`Listening on port : ${port}`));
};

startServer();

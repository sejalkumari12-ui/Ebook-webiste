import { config } from "./src/config/config.ts";
import app from "./src/app.ts";
import connectDB from "./src/config/db.ts";


const startServer = async () => {
  //connect db 
 await connectDB()
 
  const port = config.port;
  app.listen(port, () => console.log(`Listening on port : ${port}`));
};

startServer();

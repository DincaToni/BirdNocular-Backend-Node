import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "./utils/server";

//For env File
dotenv.config();

const port = process.env.PORT || 8000;

const app = createServer();

app.then((x) => {
  x.use(cors());
  x.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });
});

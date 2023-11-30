import express, { Express, Request, Response , Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import run from './db';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());

run().catch(console.dir);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
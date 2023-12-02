import express, {Request, Response , Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import run from './db';
import users from './user/user.routes'

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());

run().catch(console.dir);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/users', users);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
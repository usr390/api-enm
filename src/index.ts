import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

import EnmEventModel from "./models/EnmEvent";

const app = express(); app.use(cors({ origin: '*' })); app.use(express.json())
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('enm-api')
})

app.get('/api/enmEvents', async (req: Request, res: Response) => {
  res.json(await EnmEventModel.find().sort('year').sort('month').sort('day').sort('start'));
})

// asynchronous initialization. keeps api from processesing requests until a successful connection to db is established
mongoose.connect(process.env.MONGO_URL || '').then(() => { app.listen(port, () => {}); })
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
  process.exit(1); // exit the process with an error code
});


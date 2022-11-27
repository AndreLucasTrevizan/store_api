import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connect } from 'mongoose';
import router from './routes';

config();

const {
  MONGO_DB_URL,
  PORT
} = process.env;

connect(String(MONGO_DB_URL))
  .then(() => {
    console.log(`Connection to MongoDb done.`);
    
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use(router);

    app.listen(PORT || 5000, () => {
      console.log(`🚀 API Running on http://localhost:${PORT || 5000}`);
    });
  })
  .catch(err => console.log(`Ops, ${err}`));

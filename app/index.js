import express from 'express';
import mongoose from "mongoose";

import { authRouter } from './modules/auth/router.js';
import { restaurantsRotuer } from './modules/restaurants/router.js';

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('DB connected');

    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`)
    })

    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('app is running');
    })

    app.use('/auth', authRouter);
    app.use('/restaurants', restaurantsRotuer);
})
.catch((e) => {
  console.log("Connection error");
  console.log(e);
})


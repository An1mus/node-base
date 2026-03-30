import express from 'express';

import { authRouter } from './modules/auth/router.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app is running');
})

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`)
})

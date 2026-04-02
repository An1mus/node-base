import {Router} from 'express';

import { loginUser, registerUser } from '../user/service.js';

const authRouter = Router();

authRouter.get('/', (req, res) => {
  res.send("Auth router");
})

authRouter.get('/login', (req, res) => {
  res.send("Auth route");
})

authRouter.post('/login', async (req, res) => {
  const login = req.body["login"];
  const password = req.body["password"];

  try {
    const user = await loginUser(login, password);

    if(user) {
      res
        .status(200)
        .send(user)
    } else {
      res.status(400).send("Bad request");
    }
  } catch (e) {
    res.status(401).send("Unauthorised");
  }
})

authRouter.get('/register', (req, res) => {
  res.send("Register route");
})

authRouter.post('/register', async (req, res) => {
  const login = req.body["login"];
  const password = req.body["password"];
  
  try {
    const result = await registerUser(login, password);
    res.status(200).send(result);
  } catch(e) {
    console.log(e);
    res.status(400).send("Bad request");
  }
  
})

export {
  authRouter
};
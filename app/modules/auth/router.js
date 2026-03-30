import express from 'express';

import { registerUser, loginUser } from './service.js';

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.send("Auth router");
})

authRouter.get('/login', (req, res) => {
  res.send("Auth route");
})

authRouter.post('/login', (req, res) => {
  const login = req.body["login"];
  const password = req.body["password"];
  
  res.send(loginUser(login, password));
})

authRouter.get('/register', (req, res) => {
  res.send("Register route");
})

authRouter.post('/register', (req, res) => {
  const login = req.body["login"];
  const password = req.body["password"];
  
  res.send(registerUser(login, password));
})

export {
  authRouter
};
import { Router } from "express";

const restaurantsRotuer = Router();

restaurantsRotuer.get('/', (req, res) => {
  // check auth
  // get restaurants 
  res.send('Restaurants set to you')
});

export {
  restaurantsRotuer
}
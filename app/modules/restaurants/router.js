import { Router } from "express";

import { RestaurantModel as Restaurant } from './restauranSchema.js'
import { getAll } from "./service.js";

const restaurantsRotuer = Router();

restaurantsRotuer.get('/', async (req, res) => {
  try {
    const restaurantData = await getAll();

    if(restaurantData) {
      res.status(200).send(JSON.stringify(restaurantData));
    } else {
      res.status(404).send("Not found"); 
    }
  } catch (e) {
    res.status(500).send("Error while fetching data");
  }
});

export {
  restaurantsRotuer
}
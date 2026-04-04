import { RestaurantModel as Restaurant } from "./restauranSchema.js";

const getAll = async () => {
  try {
    const restaurants = await Restaurant.find();

    return restaurants;
  } catch (e) {
    console.log(e);
    console.log("Error while fetching restaurant");
  }
}

export {
  getAll
}
import { Schema, Model } from "mongoose";

const DishSchema = new Schema({
  name: String,
  price: Float32Array
});

const RestaurantSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  updated: {type: Date, default: Date.now},
  foodTypes: [String],
  dishes: [DishSchema],
  sits: Number,
});


const UserModel = new Model("Restaurnat", RestaurantSchema, "restaurant");

export {UserModel}
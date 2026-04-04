import mongoose, { Schema } from "mongoose";

const DishSchema = new Schema({
  "name": String,
  "price": Number
});

const ReviewSchema = new Schema({
  "user": String,
  "rating": Number,
  "comment": String
});

const RestaurantSchema = new Schema({
  "name": {type: String, required: true},
  "address": {type: String, required: true},
  "updated": {type: Date, default: Date.now},
  "foodTypes": [String],
  "dishes": [DishSchema],
  "reviews": [ReviewSchema],
  "sits": Number,
});


const RestaurantModel = mongoose.model("restaurant", RestaurantSchema, "restaurant");

export {RestaurantModel}
import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    "username": {type: String, required: true},
    "password": {type: String, required: true},
    "email": String,
    "firstName": String,
    "lastName": String,
    "isActive": Boolean,
    "roles": [String],
    "createdAt": { type: Date, default: Date.now }
});

const SALT_LOW_FACTOR = 10;

UserSchema.pre('save', async function(){
  const user = this;

  if(!user.isModified('password')) {
    return;
  }

  try {
    const salt = await bcrypt.genSalt(SALT_LOW_FACTOR);
    const hash = await bcrypt.hash(user.password, salt);

    console.log(hash)

    user.password = hash;
  } catch (e) {
    console.log("Error while registering");
    throw (e)
  }
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  const isCorrect = await bcrypt.compare(candidatePassword, this.password);

  return isCorrect;
}

const UserModel = mongoose.model("User", UserSchema, "user");

export { UserModel }
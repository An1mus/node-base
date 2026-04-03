import { UserModel as User } from "../auth/userSchema.js";

const registerUser = async (login, password) => {
  const existingUser = await User.findOne({username: login});

  if(existingUser) {
    throw "User with this login already exists";
  }

  const newUser = new User({
    username: login,
    password: password,
  })

  try {
    const result = await newUser.save();

    const returnData = result.toObject();
    delete returnData.password;

    return returnData;
  } catch (e) {
    console.log(e);
    throw (e);
  }
}

const loginUser = async (login, password) => {
  try {
    const user = await User.findOne({username: login});

    if(!user) {
      throw ("Not found");
    }

    const isPasswordMatched = await user.comparePassword(password);
    
    if(isPasswordMatched) {
      const returnData = user.toObject();
      delete returnData.password;
    
      return returnData;
    } else {
      return null
    }
  } catch (e) {
    console.log("Error while confirming a user");
    throw (e);
  }
}

export {
  registerUser,
  loginUser
}
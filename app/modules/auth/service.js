// get the db repository

const registerUser = (login, password) => {
  return "REGISTER: " + login + " " + password;
}

const loginUser = (login, password) => {
 return "LOGIN: " + login + " " + password;
}

export {
  registerUser, 
  loginUser
}
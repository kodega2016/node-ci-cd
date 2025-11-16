import User from "./models/User.js";

export async function getUsers() {
  return User.find().lean();
}

export async function createUser(user) {
  const newUser = new User(user);
  const savedUser = await newUser.save();
  return savedUser._id;
}

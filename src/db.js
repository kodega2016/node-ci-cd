import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
  }
  return mongoose.connection;
}

export async function closeDB() {
  if (isConnected) {
    await mongoose.connection.close();
    isConnected = false;
  }
}

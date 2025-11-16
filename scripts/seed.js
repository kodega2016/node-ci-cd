import "dotenv/config";
import { connectDB, closeDB } from "../src/db.js";
import User from "../src/models/User.js";

async function seed() {
  await connectDB();

  await User.deleteMany({});
  await User.insertMany([
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" }
  ]);

  console.log("Seeded test users.");
  await closeDB();
}

seed();

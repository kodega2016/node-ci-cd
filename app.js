import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./src/db.js";
import { getUsers, createUser } from "./src/userService.js";

const app = express();
app.use(bodyParser.json());

// Connect to database once at startup
await connectDB();

app.get("/", (req, res) => {
  res.json({ status: "OK", message: "API is running" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const id = await createUser(req.body);
    res.status(201).json({ insertedId: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Express API running on port ${PORT}`);
});

export default app;
export { server };

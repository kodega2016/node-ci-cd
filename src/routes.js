import express from "express";
import { getUsers, createUser } from "./userService.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

router.post("/users", async (req, res) => {
  const id = await createUser(req.body);
  res.status(201).json({ insertedId: id });
});

export default router;

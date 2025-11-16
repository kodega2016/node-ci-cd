import "dotenv/config";
import request from "supertest";
import app, { server } from "../app.js";
import { closeDB } from "../src/db.js";

describe("API Tests", () => {
  afterAll(async () => {
    await closeDB();
    server.close();
  });

  test("GET /users returns array", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST /users creates user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "API User", role: "api" });

    expect(res.status).toBe(201);
    expect(res.body.insertedId).toBeDefined();
  });
});

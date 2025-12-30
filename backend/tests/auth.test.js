import request from "supertest";
import express from "express";
import authRoutes from "../routes/auth.routes.js";
import pool from "../db.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

beforeAll(async () => {
  await pool.query("DELETE FROM users");
});

afterAll(async () => {
  await pool.end();
});

describe("Auth API", () => {

  test("Signup succeeds with valid data", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send({
        email: "testuser@mail.com",
        password: "Password@123",
        fullName: "Test User",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.token).toBeDefined();
  });

  test("Signup fails with weak password", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send({
        email: "weak@mail.com",
        password: "123",
        fullName: "Weak User",
      });

    expect(res.statusCode).toBe(400);
  });

  test("Signup fails with invalid email", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send({
        email: "invalid-email",
        password: "Password@123",
        fullName: "Invalid Email",
      });

    expect(res.statusCode).toBe(400);
  });

  test("Login succeeds with correct credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@mail.com",
        password: "Password@123",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  test("Login fails with wrong password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@mail.com",
        password: "WrongPassword@123",
      });

    expect(res.statusCode).toBe(401);
  });

});

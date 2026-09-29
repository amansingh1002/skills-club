import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Registration from "./models/Registration.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_URL
  })
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "skills-club-api"
  });
});

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, qualification, interest } = req.body;

    if (!name || !email || !qualification || !interest) {
      return res.status(400).json({
        message: "Please complete all fields."
      });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        message: "Database is not connected."
      });
    }

    const registration = await Registration.create({
      name,
      email,
      qualification,
      interest
    });

    return res.status(201).json({
      message: "Registration received successfully.",
      id: registration._id
    });
  } catch (error) {
    console.error("Registration error:", error);

    return res.status(500).json({
      message: "Something went wrong."
    });
  }
});

async function start() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
}

start();
export default app;
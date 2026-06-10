import "dotenv/config";
import express from "express";
import cors from "cors";
import ContactMessage from "./models/ContactMessage.js";
import { connectDatabase, getDatabaseStatus } from "./db.js";

const app = express();
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    }
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", async (_request, response) => {
  try {
    await connectDatabase();
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }

  response.json({
    ok: true,
    service: "harun-portfolio-api",
    database: getDatabaseStatus()
  });
});

app.post("/api/contact", async (request, response) => {
  const { name, email, message } = request.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return response.status(400).json({ error: "Name, email, and message are required." });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return response.status(400).json({ error: "A valid email is required." });
  }

  try {
    await connectDatabase();
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    return response.status(503).json({ error: "Database is not connected." });
  }

  if (getDatabaseStatus() !== "connected") {
    return response.status(503).json({ error: "Database is not connected." });
  }

  const savedMessage = await ContactMessage.create({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim()
  });

  response.status(201).json({ ok: true, id: savedMessage._id });
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: "Something went wrong." });
});

export default app;

import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ContactMessage from "./models/ContactMessage.js";

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection error:", error.message));
} else {
  console.warn("MONGODB_URI is not set. Contact messages will not be saved.");
}

app.get("/api/health", (_request, response) => {
  response.json({
    ok: true,
    service: "harun-portfolio-api",
    database: mongoose.connection.readyState === 1 ? "connected" : "not-connected"
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

  if (mongoose.connection.readyState !== 1) {
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

app.listen(port, () => {
  console.log(`Portfolio API running on port ${port}`);
});

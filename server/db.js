import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI;

let connectionPromise;
let hasWarnedAboutMissingUri = false;

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!mongoUri) {
    if (!hasWarnedAboutMissingUri) {
      console.warn("MONGODB_URI is not set. Contact messages will not be saved.");
      hasWarnedAboutMissingUri = true;
    }
    return null;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(mongoUri).catch((error) => {
      connectionPromise = null;
      throw error;
    });
  }

  return connectionPromise;
}

export function getDatabaseStatus() {
  return mongoose.connection.readyState === 1 ? "connected" : "not-connected";
}

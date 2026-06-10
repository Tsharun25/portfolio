import "dotenv/config";
import app from "./app.js";
import { connectDatabase } from "./db.js";

const port = process.env.PORT || 5000;

connectDatabase()
  .then((connection) => {
    if (connection) {
      console.log("MongoDB connected");
    }
  })
  .catch((error) => console.error("MongoDB connection error:", error.message));

app.listen(port, () => {
  console.log(`Portfolio API running on port ${port}`);
});

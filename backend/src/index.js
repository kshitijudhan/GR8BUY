import "dotenv/config.js";
import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;
(async () => {
  await connectDB();

  app.use(express.json());

  app.listen(PORT, () => {
    console.log("Your current projeect runs on, ", PORT);
  });
})();

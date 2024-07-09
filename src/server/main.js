// directory
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv-flow";
import express from "express";
import ViteExpress from "vite-express";
import pages from "./routes/pages.js";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: __dirname });
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    ViteExpress.listen(app, process.env.PORT, () =>
      console.log(
        `Connected to DB & listening on http://localhost:${process.env.PORT}/...`
      )
    );
  })
  .catch((err) => {
    console.log(err);
  });

app.use(pages);

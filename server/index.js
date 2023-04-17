import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRouter from "./routes/postRoutes.js";
import dalleRouter from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRouter);
app.use("/api/v1/dalle", dalleRouter);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server has started on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

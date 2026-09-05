import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./src/prisma/db.js";
import gameRouter from "./game/game.routes";
import platformRouter from "./platform/platform.routes.js";

import cloudinary from "./src/cloudinary.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/game", gameRouter);
app.use("/api/platform", platformRouter);





app.get("/", (req, res) => {
  res.json({
    message: "API is running 🚀",
  });
});

app.get("/users", async (req, res) => {


  try {
    const users = await db.orm.public.User.all()

    

    res.json(users);
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      message: "Failed to fetch users",
    });
  }
});



app.post("/adduser", async (req, res) => {
  try {
    const user = await db.orm.public.User.create({
      email: "seddik@example.com",
      username: "seddik",
      name: "seddik",
    });
    return res.status(201).json(user);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Failed to create user", });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
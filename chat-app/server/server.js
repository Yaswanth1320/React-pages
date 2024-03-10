import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import msgRoutes from "./routes/msg.routes.js";
import userRoutes from './routes/users.routes.js'
import connectToDB from "./database/connectToDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", msgRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
});

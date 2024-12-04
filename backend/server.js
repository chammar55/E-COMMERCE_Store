import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allow to get data from body of request
app.use(cookieParser()); // For accessing the cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port http://localhost" + PORT);
  connectDB();
});

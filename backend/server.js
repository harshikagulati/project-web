import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import auth from "./routes/auth.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Insights";

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174","http://localhost:5000","https://houseofmedia.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Serve frontend
app.use(express.static(path.join(__dirname, "client/dist")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
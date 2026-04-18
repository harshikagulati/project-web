import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import auth from "./routes/auth.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174","http://localhost:5000","https://houseofmedia.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

mongoose.connect("mongodb://localhost:27017/Insights")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
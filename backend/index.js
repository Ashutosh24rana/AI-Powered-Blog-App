import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import blogRoute from "./routes/blog.route.js";
import cors from "cors";
import aiRoute from "./routes/ai.route.js"; 

const app = express();
dotenv.config();

const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// File upload middleware
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// MongoDB connection
try {
  mongoose.connect(MONGO_URL);
  console.log("✅ Connected to MongoDB");
} catch (error) {
  console.log("MongoDB Connection Error:", error);
}

// Routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/ai", aiRoute); // gemini route

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

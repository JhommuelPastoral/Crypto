import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();

const app = express();

const corsOptions = {
  origin: "https://crypto-f4su.onrender.com",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT);
  });
  console.log("Database connected");
});




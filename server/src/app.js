
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import expenseRoutes from "./routes/expenseRoutes.js";
import requestLogger from "./middleware/requestLogger.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Expense Tracker Backend is Running Successfully!");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is working successfully"
  });
});

app.use("/api/expenses", expenseRoutes);

export default app;

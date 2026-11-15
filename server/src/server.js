
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";
import Expense from "./models/Expense.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

console.log("Expense model loaded:", Expense.modelName);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

// Basic imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import colors from 'colors'

// Middleware function


// Route imports
import productRoutes from './routes/productRoutes.js'

// Database connection
connectDB()
// Initialize express
const app = express();
// Define port
const PORT = process.env.PORT || 3000;



app.get("/", (request, response) => {
  response.send("API is running....");
});

app.use("/api/products", productRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.bgYellow));

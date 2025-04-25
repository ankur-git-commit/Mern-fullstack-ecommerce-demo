import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("API is running....");
});

app.get("/api/products", (request, response) => {
  response.json(products);
});

app.get("/api/products/:id", (request, response) => {
  const id = request.params.id;
  const product = products.find((p) => p._id === id);
  response.json(product);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

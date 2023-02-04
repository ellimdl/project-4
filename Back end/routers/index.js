const express = require("express");
const app = express();
const cors = require("cors");

const {
  create: createProduct,
  findAll: findAllProduct,
  findOne: findOneProduct,
  updateOne: updateOneProduct,
  deleteOne: deleteOneProduct,
} = require("../controllers/product-controller");

// Middleware
app.use(express.json());
app.use(cors());

// Endpoints
app.post("/products", createProduct);
app.get("/products", findAllProduct);
app.get("/products/:id", findOneProduct);
app.put("/products/:id", updateOneProduct);
app.delete("/products/:id", deleteOneProduct);

// Start server
app.listen(5000, () => {
  console.log("Listening to port 5000...");
});

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
  fermer: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

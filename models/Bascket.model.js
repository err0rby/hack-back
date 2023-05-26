const mongoose = require("mongoose");

const bascketSchema = mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  products: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
  ],
  price: Number,
});

const Bascket = mongoose.model("Backet", bascketSchema);

module.exports = Bascket;

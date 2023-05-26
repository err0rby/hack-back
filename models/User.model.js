const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  role: String,
  name: String,
  surname: String,
  login: String,
  password: String,
  bankCard: String,
  raiting: String,
  phone: Number,
  mail: String,
  bascket: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
  mySubscribers: [],
  followers: [],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

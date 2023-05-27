const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  role: String,
  name: String,
  surname: String,
  logo: String,
  login: String,
  password: String,
  bankCard: String,
  raiting: String,
  phone: Number,
  mail: String,
  title: String,
  ratedUsers:[{ user: mongoose.SchemaTypes.ObjectId, rating: Number }],
  rating: {
    type: Number,
    default: 0,
  },
  bascket: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
  mySubscribers: [],
  followers: [],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

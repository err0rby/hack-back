const Bascket = require("../models/Bascket.model");
const User = require("../models/User.model");

module.exports.bascket = {
  getBascket: async (req, res) => {
    const data = await Bascket.findOne(req.params.id).populate("products user");
    res.json(data);
  },
  addBascket: async (req, res) => {
    const data = await Bascket.create({
      user: req.body.user,
      products: req.body.products,
      price: req.body.price,
    });
    res.json(data);
  },
  addProductToBascket: async (req, res) => {
    const bascket = await Bascket.findById(req.params.id);
    const data = await Bascket.findByIdAndUpdate(
      bascket,
      {
        products: [...bascket.products, req.body.products],
        price: req.body.price,
      },
      { new: true }
    );

    res.json(data);
  },
  updateBascket: async (req, res) => {
    const data = await Bascket.findByIdAndUpdate(
      req.params.id,
      {
        user: req.body.user,
        products: req.body.products,
        price: req.body.price,
      },
      { new: true }
    );
    res.json(data);
  },
  deleteOneProdBascket: async (req, res) => {
    const data = await Bascket.updateOne(
      { _id: req.params.id },
      { $pull: { products: req.body.products } },
      { new: true }
    );
    res.json(data);
  },
};

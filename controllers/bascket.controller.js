const Bascket = require("../models/Bascket.model");

module.exports.bascket = {
  getBascket: async (req, res) => {
    const data = await Bascket.find().populate("products user");
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
  updateBascket: async (req, res) => {
    const data = await Bascket.findByIdAndUpdate(req.params.id, {
      user: req.body.user,
      products: req.body.products,
      price: req.body.price,
    });
    res.json(data);
    
  },
  deleteBascket: async (req, res) => {
    const data = await Bascket.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};

const Product = require("../models/Product.model");

module.exports.productController = {
  getProduct: async (req, res) => {
    try {
      const data = await Product.find({});
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },

  addProduct: async (req, res) => {
    try {
      const { name, image, description, price, fermer } = req.body;
      const data = await Product.create({
        name,
        image,
        description,
        price,
        fermer
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const data = await Product.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },

  updateProduct: async (req, res) => {
    const { name, image, description, price, fermer } = req.body;
    try {
      const data = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name,
          image,
          description,
          price,
          fermer,
        },
        { new: true }
      );
      const result = await data.populate("fermer");
      res.json(result);
    } catch (error) {}
  },
};

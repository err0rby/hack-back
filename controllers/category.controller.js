const Category = require("../models/Category.model");

module.exports.category = {
    getCategories: async (req, res) => {
        try {
            if(req.params.id) {
                const categories = await Category.findById(req.params.id).populate("products");
                return res.json(categories);
            }
            const categories = await Category.find().populate("products");
            res.json(categories);
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    },
    createCategory: async (req, res) => {
        try {
            const {name, products} = req.body
            const category = new Category({name, products})
            await category.save()
            return res.json(category)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id)
            res.json(category)
        } catch (e) {
            console.log(e)
            return res.json({message: 'Ошибка'})
        }
    }
}

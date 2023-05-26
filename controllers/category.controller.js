const Category = require('../models/Category.model')

module.exports.category = {
    getCategories: async (req, res) => {
        let categories = []
        try {
            if(req.params.id) {
                return categories = await Category.find(req.params.id).exec();
            }
            const categories = await Category.find({}).exec();
            res.json({
                status: 'success',
                data: categories,
            });
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
            // const category = new Category({name, products, author: req.user.id})
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
            // if(String(category.author._id) === String(req.user._id)) {
            //     await Category.findOneAndDelete({_id: categoryId})
            //     return res.json({message: 'Категория была удалена'})
            // }
            res.json(category)
        } catch (e) {
            console.log(e)
            return res.json({message: 'Ошибка'})
        }
    }
}

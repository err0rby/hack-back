const Router = require('express')
const router = new Router()
const {category} = require("../controllers/category.controller")

router.get('/category', category.getCategories)
router.get('/category/:id', category.getCategories)
router.post('/category', category.createCategory)
router.delete('/category/:id', category.deleteCategory)

module.exports = router

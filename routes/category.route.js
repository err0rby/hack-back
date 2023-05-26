const Router = require('express')
const router = new Router()
const categoryController = require("../controllers/category.controller")

router.get('/category', categoryController.getCategories)
router.get('/category/:id', categoryController.getCategories)
router.post('/category', categoryController.createCategory)
router.delete('/category/:id', categoryController.deleteCategory)

const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {type: mongoose.SchemaTypes.String, required: true},
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    products: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Product'}],
})

const Category = mongoose.model("Category", categorySchema)

module.exports = Category

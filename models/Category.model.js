const {Schema, ObjectId, model} = require("mongoose")

const Category = new Schema({
    name: {type: String, required: true},
    author: {type: ObjectId, ref: 'User'},
    products: [{type: ObjectId, ref: 'Product'}],
})

module.exports = model("Category", Category)

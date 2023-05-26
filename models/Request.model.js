const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    car: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Car'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    from: String,
    to: String,
    latLngFrom: Object,
    latLngTo: Object,
    km: Number,
    kg: Number,
    price: Number, 
    payed: {
        type: Boolean,
        default: false,
    },
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product'
    }
})

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
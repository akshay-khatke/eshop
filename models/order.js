const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    name: String,
    image: String,
    orderNo: {
        type: Number,
        required: true
    }
})

module.exports= mongoose.model("Order", orderSchema);

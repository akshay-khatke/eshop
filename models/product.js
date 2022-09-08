const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    // description: { type: String, required: true },
    // richDescription:{ type:String,default: ''},
    image: { type: String, default: '' },
    // images: [{ type: String }],
    // brand: { type: String, default: '' },
    // price: { type: String, default: '' },
    // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    
    // rating: { type: Number, default: 0 },
    // numReview: { type: Number, default: 0 },


    stock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    // isFeatured:{
    //     type:Boolean,
    //     default:false
    // },
    // dateCreated:{ type:Date, default:Date.now}
})

module.exports = mongoose.model("product", productSchema);

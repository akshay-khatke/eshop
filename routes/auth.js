const express = require('express');
const router = express.Router();
const Auth = require('../models/auth');


// const Product = ProductData.product;
// const Category = require('../models/category');


router.get(`/login`, async (req, resp) => {
    console.log("in routs data")

    // const productList = await Product.find();
    const authData = await Auth.find().select('name image -_id');//here only passed parameter we get
    if (!authData) {
        resp.send(500).json({
            success: false
        })
    }
    resp.send(productList);
});



router.post(`/register`, (req, resp) => {

    const auth = new Auth({
        name: req.body.name,
        image: req.body.image,
        stock: req.body.stock,
    })

    product.save().then((cretatedProduct) => {
        resp.status(201).json(cretatedProduct)
    }).catch((err) => {
        resp.status(500).json({
            error: err,
            success: false
        })
    })
});


router.get('/:id',async(req,resp)=>{
    const product=await Product.findById(req.params.id);

    if(!product){
        resp.status(500).json({success: false})
    }
    resp.send(product)
})



// router.post(`/`, (req, resp) => {
//     // const category=await category.findById(req.body.category);
//     // if(!category){
//     //     return resp.status(404).send("Invalid category")
//     // }

//     const product = new Product({
//         name: req.body.name,
//         description: req.body.description,
//         richDescription: req.body.richDescription,
//         image: req.body.image,
//         images: req.body.images,
//         brand: req.body.brand,
//         price: req.body.price,
//         category: req.body.category,
//         rating: req.body.rating,
//         numReview: req.body.numReview,
//         stock: req.body.stock,
//         isFeatured: req.body.isFeatured,
//         // dateCreated: req.body.dateCreated
//     })
//     // console.log(product)
//     // product=await product.save();
//     product.save().then((cretatedProduct) => {
//         resp.status(201).json(cretatedProduct)
//     }).catch((err) => {
//         resp.status(500).json({
//             error: err,
//             success: false
//         })
//     })

// // if(!product){
// //     resp.status(500).send("interanl sevrer error")
// // }

// // resp.send(product)

// })

module.exports = router;
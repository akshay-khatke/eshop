const express = require('express');
const router = express.Router();
const User = require('../models/product');
// const Product = ProductData.product;


router.get(`/`, async (req, resp) => {
    console.log("in routs")

    const userList = await User.find();
    if (!userList) {
        resp.send(500).json({
            success: false
        })
    }
    resp.send(userList);
})

router.post(`/`, (req, resp) => {

    const user = new User({
        name: req.body.name,
        image: req.body.image,
        stock: req.body.stock,
    })
    // console.log(product)
    user.save().then((cretatedProduct) => {
        resp.status(201).json(cretatedProduct)
    }).catch((err) => {
        resp.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;
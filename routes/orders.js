const express = require('express');
const router = express.Router();
const Order = require('../models/order');
// const Product = ProductData.product;


router.get(`/`, async (req, resp) => {
    console.log("in routs")

    const OrderList = await Order.find();
    if (!OrderList) {
        resp.send(500).json({
            success: false
        })
    }
    resp.send(OrderList);
})

router.post(`/`, (req, resp) => {

    const order = new Order({
        name: req.body.name,
        image: req.body.image,
        stock: req.body.stock,
    })
    // console.log(product)
    order.save().then((cretatedProduct) => {
        resp.status(201).json(cretatedProduct)
    }).catch((err) => {
        resp.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;
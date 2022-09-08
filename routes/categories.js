const express = require('express');
const router = express.Router();
const Category = require('../models/category');
// const Product = ProductData.product;

router.get(`/`, async (req, resp) => {
    const CategoryList = await Category.find();
    if (!CategoryList) {
        resp.send(404).json({
            success: false
        })
    }
    resp.send(CategoryList);
})

router.get(`/:id`, async (req, resp) => {
    console.log("in routs")

    const CategoryList = await Category.findById(req.params.id);
    if (!CategoryList) {
        resp.send(500).json({
            message: "category id data not found"
        })
    }
    resp.status(200).send(CategoryList);
})



router.put(`/:id`, async (req, resp) => {

    const CategoryUpdateData = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        },
        { new: true });
    if (!CategoryUpdateData) {
        resp.send(400).json({
            message: "category id data not found"
        })
    }
    resp.send(CategoryUpdateData);
})

router.post(`/`, (req, resp) => {

    const category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    })

    category.save().then((cretatedProduct) => {
        resp.status(201).json(cretatedProduct)
    }).catch((err) => {
        resp.status(500).json({
            error: err,
            success: false
        })
    })
})

router.delete('/:id', (req, resp) => {

    Category.findByIdAndRemove(req.params.id).then(category => {
        if (category) {
            return resp.status(200).json({ success: true, messege: "category id deleted" })

        } else {
            return resp.status(404).json({ success: false, messege: "category not found" })
        }
    }).catch((err) => {
        return resp.status(500).json({ success: false, error: err })
    })
})

module.exports = router;
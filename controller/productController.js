
const Product = require('../models/product');

module.exports.GetProducts = async (req,resp) => {
console.log("in products")
    // const productList = await Product.find();
    const productList = await Product.find().select('name image -_id');//here only passed parameter we get
    if (!productList) {
        resp.send(500).json({
            success: false
        })
    }
    resp.send(productList);

}



module.exports.CreateProduct = async (req, resp) => {
console.log(req.body,"req data")
   


const product = new Product({
        // name: req.body.name,
        // image: req.body.image,
        // stock: req.body.stock,
        name: req.body.name,
  description: req.body.description,
  richDescription: req.body.richDescription,
  image: req.body.image,
  images: req.body.images,
  brand: req.body.brand,
  price: req.body.price,
  rating:req.body.rating,
  numReview: req.body.numReview,
  stock: req.body.stock
    })

    product.save().then((cretatedProduct) => {
        resp.status(201).json(cretatedProduct)
    }).catch((err) => {
        resp.status(500).json({
            error: err,
            success: false
        })
    })

}


module.exports.GetProductById = async (req, resp) => {
    console.log(req.params,"params");

    const product = await Product.findById(req.params.id);

    if (!product) {
        resp.status(500).json({ success: false })
    }
    resp.send(product)
}
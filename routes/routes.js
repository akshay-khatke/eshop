const userRouter=require('./users')
const productRouter=require('./products')

const express = require('express');

const router=express.Router();
router.use('/user',userRouter)
router.use('/products',productRouter)



module.exports= router;
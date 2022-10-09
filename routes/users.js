const express = require('express');
const router = express.Router();
// const User = require('../models/user');
// const bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');
const {LoginUser,Register}=require('../controller/userController')
// const Register=require('../controller/userController')


// import {LoginUser,Register} from '../controller/userController'
// const Register=require('../controller/userController')
// const Product = ProductData.product;
console.log(LoginUser,"LoginUser")
router.post('/login',LoginUser)
router.post('/register',Register)

// router.get(`/`, async (req, resp) => {
//     console.log("in routs")

//     const userList = await User.find();
//     if (!userList) {
//         resp.send(500).json({
//             success: false
//         })
//     }
//     resp.send(userList);
// })

// router.post(`/`, (req, resp) => {

//     const user = new User({
//         name: req.body.name,
//         image: req.body.image,
//         stock: req.body.stock,
//     })
//     // console.log(product)
//     user.save().then((cretatedProduct) => {
//         resp.status(201).json(cretatedProduct)
//     }).catch((err) => {
//         resp.status(500).json({
//             error: err,
//             success: false
//         })
//     })
// })


// router.post('/register',async(req,resp)=>{

//     try{

//         const {first_name, last_name, email, password,mobileNo}=req.body;

//         if (!(email && password && first_name && last_name&&mobileNo)) {
//             resp.status(400).send("All input is required");
//           }
      
//           // check if user already exist
//           // Validate if user exist in our database
//           const oldUser = await User.findOne({ email });
//           console.log(oldUser,"oldUSer");

          
//     if (oldUser) {
//         return resp.status(409).send("User Already Exist. Please Login");
//       }
//      const encryptedPassword = await bcrypt.hash(password, 10);

//      const user = new User({
//         first_name,
//         last_name,
//         email: email.toLowerCase(), // sanitize: convert email to lowercase
//         password: encryptedPassword,
//         mobileNo:mobileNo
//       });

//       const token = jwt.sign(
//         {  email },
//       "akshaybdfbjsdfdsnm",
//         {
//           expiresIn: "2h",
//         }
//       );

//       user.token=token;


//       user.save().then((userData) => {
//         consol.log(userData,"user Data")
//         resp.status(201).json(userData)
//     }).catch((err) => {
//         resp.status(500).json({
//             error: err,
//             success: false
//         })
//     })
//     resp.status(201).json(user);
//     }catch(err){
//         console.log('error while register ',err)
//     }

// })


// router.post(`/login`,async(req,resp)=>{

//     try {
//         // Get user input
//         const { email, password } = req.body;
    
//         // Validate user input
//         if (!(email && password)) {
//           resp.status(400).send("All input is required");
//         }
//         // Validate if user exist in our database
//         const user = await User.findOne({ email });
    
//         if (user && (await bcrypt.compare(password, user.password))) {
//           // Create token
//           const token = jwt.sign(
//             {  email },
//             "akshaybdfbjsdfdsnm",
//             {
//               expiresIn: "2h",
//             }
//           );
    
//           // save user token
//           user.token = token;
    
//           // user
//           resp.status(200).json(user);
//         }
//         resp.status(400).send("Invalid Credentials");
//       } catch (err) {
//         console.log(err);
//       }
    
// })


module.exports = router;
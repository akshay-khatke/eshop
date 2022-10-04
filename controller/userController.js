const validationResult=require("express-validator");
const User = require('../models/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

export const LoginUser=async()=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    try {
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
          resp.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const token = jwt.sign(
            {  email },
            "akshaybdfbjsdfdsnm",
            {
              expiresIn: "2h",
            }
          );
    
          // save user token
          user.token = token;
    
          // user
          resp.status(200).json(user);
        }
        resp.status(400).send("Invalid Credentials");
      } catch (err) {
        return res.status(500).json({ 
statusCode:500,
message:'user not logged in',
data:{},
errors:error
        })
      }

    
}



export const Register=async()=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }



    try{

        const {first_name, last_name, email, password,mobileNo}=req.body;

        if (!(email && password && first_name && last_name&&mobileNo)) {
            resp.status(400).send("All input is required");
          }
      
          // check if user already exist
          // Validate if user exist in our database
          const oldUser = await User.findOne({ email });
          console.log(oldUser,"oldUSer");

          
    if (oldUser) {
        return resp.status(409).send("User Already Exist. Please Login");
      }
     const encryptedPassword = await bcrypt.hash(password, 10);

     const user = new User({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        mobileNo:mobileNo
      });

      const token = jwt.sign(
        {  email },
      "akshaybdfbjsdfdsnm",
        {
          expiresIn: "2h",
        }
      );

      user.token=token;


      user.save().then((userData) => {
        consol.log(userData,"user Data")
        resp.status(201).json(userData)
    }).catch((err) => {
        resp.status(500).json({
            error: err,
            success: false
        })
    })
    resp.status(201).json(user);
    }catch(err){
        console.log('error while register ',err)
    }
}



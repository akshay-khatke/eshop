const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: false }))
// const bodyParser = require('body-parser');
const morgan = require('morgan')//it will create the logs
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser")
const api = process.env.APP_URL;
require('dotenv/config')
const compression = require("compression")
const cors = require("cors")
// const cookieParser = require("cookie-parser")
// app.use(apiLimiter)

app.use(compression())//app.use() its a middlware and which middleware we want we pass the argumnet in app use
app.use(cors());
app.options('*', cors())//any type of request here will be allowed
//get put post delete so used *
// app.use(express.json())
app.use(express.urlencoded({ extended: false }))//parses incoming requests with URL-encoded payloads.
//if extended false then using querystring library if true then qs libary it will use
// model 
const productRouter = require('./routes/products');//router object creted and that exports from
// taht file for multiple files we creted routes depends on functaionality which will it will give seperate routs
//and code will be clean
const categoryRouter = require('./routes/categories');//here taken handlers where we written requests
const userRouter = require('./routes/users');
const orderRouter = require('./routes/orders');
const indexRoutes=require('./routes/routes')


// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api/v1',indexRoutes)
//routes
app.use(`/api/v1/products`, productRouter)//it will executes the file with this endpint and which request done
app.use(`/api/v1/categories`, categoryRouter)//api/v1/categories its a endpoint of api
app.use(`/api/v1/users`, userRouter)
app.use(`/api/v1/orders`, orderRouter)

mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: "eshopdb",
})
    .then(() => {
        console.log("db connection is ready")
    }).catch((err) => {
        console.log(err)
    })

app.listen(3000, () => {
    console.log("server running on 3000");
})
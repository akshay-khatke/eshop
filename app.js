const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: false }))
// const bodyParser = require('body-parser');
const morgan = require('morgan')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser")
const api = process.env.APP_URL;
require('dotenv/config')
const compression = require("compression")
const cors = require("cors")
// const cookieParser = require("cookie-parser")
// app.use(apiLimiter)

app.use(compression())
app.use(cors());
app.options('*',cors())//any type of request here will be allowed
                       //get put post delete so used *
// app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// model 
const productRouter = require('./routes/products');
const categoryRouter = require('./routes/categories');
const userRouter = require('./routes/users');
const orderRouter = require('./routes/orders');



// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//routes
app.use(`/api/v1/products`, productRouter)
app.use(`/api/v1/categories`, categoryRouter)
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
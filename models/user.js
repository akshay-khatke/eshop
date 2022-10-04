const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
   
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    mobileNo: {
        type: Number,
        required: true
    },
    token: { type: String },

})

module.exports= mongoose.model("Users", userSchema);

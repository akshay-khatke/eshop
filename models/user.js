const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    image: String,
    mobileNo: {
        type: Number,
        required: true
    }
})

module.exports= mongoose.model("User", userSchema);

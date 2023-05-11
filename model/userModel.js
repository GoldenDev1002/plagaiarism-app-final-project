let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type:String,
        required: true,
    }
}, {timestamps: true});

let userModel = mongoose.model("UserModels", userSchema);
module.exports = userModel;
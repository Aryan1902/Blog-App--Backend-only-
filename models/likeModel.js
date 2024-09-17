//import mongoose
const mongoose = require("mongoose");
 
// Kis post par like kar rahe ho and kon like kar rha hai , these will be two things in likeModel case...
// Post apne aap mein ek model hai toh mein usko refer karunga

//route handler

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
});

//export
module.exports = mongoose.model("Like", likeSchema);
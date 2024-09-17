//import mongoose
const mongoose = require("mongoose");

// Aapke comment ke andar teen cheezen hongi , phela kis post par comment kiya hai ,, doosra kis user ne comment kiya hai and third is kya 
// comment kiya hai ,, kis post par comment kiya hai , post apne aap mein ek model hai...
//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {  // kis user ne comment kiya hai 
        type: String, 
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);
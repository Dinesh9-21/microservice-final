const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Admin","User"],
        default: "User"
   }
});

userSchema.methods.passwordHash = async function(password){
    console.log("i am in the hash ");
    try{
        var salt = await bcrypt.genSalt(10);

        var hashedPassword = await bcrypt.hash(password,salt);
        return hashedPassword;
    }catch(err){
        return new Error("Error while hashing");
    }
        
}




const userModel = ()=>{
    return new mongoose.model("userdb",userSchema);
}

const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to Database..");

    })
    .catch(err=>{
        console.log("Error while connecting to the database....");
    })
}


module.exports = {userModel,dbConnection};
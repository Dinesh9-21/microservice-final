const mongo = require("../models/userSchema");

const registerRouter = async(req,res)=>{
        console.log("I am in the register route");
        var userModel = mongo.userModel();
        console.log(req.body);
        var user = new userModel({
            user_name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
        })
        user.password = await user.passwordHash(user.password);
        mongo.dbConnection();
        
        await user.save()
        .then(data=>{
            console.log("Data saved successfully....");
        })
        .catch(err=>{
            console.log("Error while saving the data");
        })
        res.send("register Router");
}


module.exports = {registerRouter};
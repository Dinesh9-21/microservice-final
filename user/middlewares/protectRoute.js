const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const protectRoute = (req,res,next)=>{

    if(!req.cookies.token){
        return next();
    }

    const token = req.cookies.token;
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log(decoded);
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(401).send("Expired Token...");
    }

}

module.exports = {protectRoute};
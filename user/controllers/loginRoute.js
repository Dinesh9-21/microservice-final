const mongo = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const bcrypt = require("bcryptjs");

const loginRoute = async (req, res) => {
  const { email, password } = req.body;

  try {
    mongo.dbConnection();
    const userModel = mongo.userModel();
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "User not found." }); // ✅ Always return JSON
    }

    const isTrue = await bcrypt.compare(password, user.password);
    if (!isTrue) {
      return res.status(401).json({ message: "Invalid credentials." }); // ✅ Always return JSON
    }

    const payload = { user_id: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login Successful",
      user: { id: user._id, email: user.email, role: user.role },
    });

  } catch (err) {
    console.error("Login Error:", err); // ✅ Logs error in backend console
    return res.status(500).json({ message: "Internal Server Error" }); // ✅ Always return JSON
  }
};


module.exports = {loginRoute}
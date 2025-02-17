var express = require('express');
const { registerRouter } = require('../controllers/registerRoute');
const { loginRoute } = require('../controllers/loginRoute');
const { protectRoute } = require('../middlewares/protectRoute');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/register",registerRouter);

router.post("/login",protectRoute,loginRoute);



// ✅ Protected Route (New)
router.get("/protected", protectRoute, (req, res) => {
  res.json({ message: "You are authenticated", user: req.user });
});

// ✅ Logout Route (New)
router.get("/logout", (req, res) => {
  res.clearCookie("token"); // Removes JWT token cookie
  res.json({ message: "Logged out successfully" });
});

module.exports = router;

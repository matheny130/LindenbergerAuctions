const router = require("express").Router();
const quizRoutes = require("./quiz");
const userRoutes = require("./user");

// Quiz routes
router.use("/quiz", quizRoutes);

// User Routes
router.use("/user", userRoutes);


module.exports = router;

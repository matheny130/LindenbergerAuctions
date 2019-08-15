const router = require("express").Router();
const quizesController = require("../../controllers/quizesController");

// Matches with "/api/quiz"
router.route("/")
  .get(quizesController.findAll)
  .post(quizesController.create);

// Matches with "/api/quiz/:id"
router
  .route("/:id")
  .get(quizesController.findById)
  .put(quizesController.update)
  .delete(quizesController.remove);

module.exports = router;
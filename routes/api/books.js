const router = require("express").Router();
const booksController = require("../../controller/bookController");

router.route("/").get(booksController.findAll).post(booksController.create);

router.route("/:id").delete(booksController.delete);

module.exports = router;

const Router = require("express");
const router = new Router();
const TypeController = require("../controllers/typeController");

router.post("/post-type", TypeController.assignType);
router.get("/get-type");

module.exports = router;

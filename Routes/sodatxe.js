const sodatxeController = require("../Controllers/sodatxeController");

const router = require("express").Router();

router.post("/",sodatxeController.addSo);
router.get("/",sodatxeController.getAllDatXe);
router.put("/:id",sodatxeController.editSo);
router.delete("/:id",sodatxeController.deleteSo);
module.exports = router;
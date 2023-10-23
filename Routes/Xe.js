
const xeController=require("../Controllers/XeController");
const router=require("express").Router();

//Them xe
router.post("/",xeController.addXe);
router.get("/",xeController.getAllXe);
module.exports=router;
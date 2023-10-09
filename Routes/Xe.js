
const xeController=require("../Controllers/XeController");
const router=require("express").Router();

//Them xe
router.post("/",xeController.addXe);
router.get("/",xeController.getAllXe);
router.get("/getBangGia",xeController.getBangGia);
module.exports=router;
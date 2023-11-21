const LichSuDatXeController=require("../Controllers/LichSuDatXe");
const router=require("express").Router();

//Them xe
router.get("/:id",LichSuDatXeController.getAllLichSu);
module.exports=router;

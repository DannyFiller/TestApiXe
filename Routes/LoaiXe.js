const LoaiXeController=require("../Controllers/LoaiXeController");

const router=require("express").Router();

router.get("/",LoaiXeController.getAllLoaiXe);
module.exports = router;

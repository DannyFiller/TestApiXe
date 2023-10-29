const bangGiaController=require("../Controllers/BangGiaController")
const router=require("express").Router();

router.get("/",bangGiaController.getBangGia);
router.get("/locTheoLoai/:loai/:ngay",bangGiaController.locTheoLoai);
module.exports=router;
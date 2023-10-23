const KhachHangController=require("../Controllers/KhachHangController")
const router=require("express").Router();

router.post("/",KhachHangController.addKhachHang);
router.get("/",KhachHangController.getAllKhachHang);

module.exports=router;
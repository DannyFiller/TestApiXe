const KhachHangController=require("../Controllers/KhachHangController")
const router=require("express").Router();

router.post("/",KhachHangController.addKhachHang);
router.put("/:id",KhachHangController.updateKhachHang);
router.get("/",KhachHangController.getAllKhachHang);

module.exports=router;
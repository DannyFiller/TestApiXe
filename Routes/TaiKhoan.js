const TaiKhoan=require("../Controllers/TaiKhoanController")
const router=require("express").Router();

router.post("/",TaiKhoan.addTK);
router.put("/:id",TaiKhoan.updateTK);
router.get("/GetTKKH/:TenTaiKhoan",TaiKhoan.getTKKhachHang);
router.get("/GetTKNV/:TenTaiKhoan",TaiKhoan.getTKNhanVien);
module.exports=router;
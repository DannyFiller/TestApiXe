const PhanLoaiController = require("../Controllers/PhanLoaiController");
const router=require("express").Router();
// Định nghĩa route POST cho thêm phân loại
// router.post("/", PhanLoaiController.addPhanLoai);
router.get("/", PhanLoaiController.getAllPhanLoai);
// router.get("/:MaPL", PhanLoaiController.getPhanLoai1);
// router.put("/:id", PhanLoaiController.updatePhanLoai);
// router.delete("/:id", PhanLoaiController.deletePhanLoai);

module.exports=router;

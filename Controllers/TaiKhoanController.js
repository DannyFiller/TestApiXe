const {TaiKhoan}=require('../model/model');

const KhachHangController={
    addTK:async(req,res)=>{
        try{
            const newTK=new TaiKhoan(req.body);
            const saveTK=await newTK.save();
            res.status(200).json(saveTK);
        }catch(err){
            res.status(500).json(err);
        }    
    },
    getAllTK:async(req,res)=>{
        try{
            const SoXes=await TaiKhoan.find();
            res.status(200).json(SoXes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getTKKhachHang:async(req,res)=>{
        try{
            const SoXes=await TaiKhoan.find({TenTaiKhoan:req.params.TenTaiKhoan,ChucVu:"Khách hàng"}).populate("IDKH");
            res.status(200).json(SoXes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getTKNhanVien:async(req,res)=>{
        try{
            const SoXes=await TaiKhoan.find({TenTaiKhoan:req.params.TenTaiKhoan,ChucVu:"Nhân viên"}).populate("IDNV");
            res.status(200).json(SoXes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    updateTK:async(req,res)=>{
        try{
            const kh=await TaiKhoan.findById(req.params.id);
            await kh.updateOne({$set:req.body});
            res.status(200).json("updateSuccess");
        }catch(err){
            res.status(500).json(err);
        }    
    },
}
module.exports=KhachHangController;
const {KhachHang}=require('../models/model');

const KhachHangController={
    addKhachHang:async(req,res)=>{
        try{
            const newKhachHang=new KhachHang(req.body);
            const saveKhachHang=await newKhachHang.save();
            res.status(200).json(saveKhachHang);
        }catch(err){
            res.status(500).json(err);
        }    
    },
    getAllKhachHang:async(req,res)=>{
        try{
            const SoXes=await KhachHang.find();
            res.status(200).json(SoXes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    
}
module.exports=KhachHangController;
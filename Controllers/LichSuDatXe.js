const {SoXe}=require('../model/model');

const LichSuDatXeController={

    getAllLichSu:async(req,res)=>{
        try{
            const SoXes=await SoXe.find({IDKH:req.params.id}).populate(["IDKH","IDXe"]); //pupulate lấy tất các thông khách hàng và xe
            res.status(200).json(SoXes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    
}
module.exports=LichSuDatXeController;
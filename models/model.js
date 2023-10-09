const mongoose=require("mongoose");

const XeSchema=new mongoose.Schema(
    {
    BienSoXe:{
        type:String,
        required:true
    },
    TenXe:{
        type:String,
        required:true
    },
    LoaiXe:{
        type:String,
        required:true
    },
    TinhTrangXe:{
        type:String
    },
    GiaThue:{
        type:Number,
        required:true
    },
    HangXe:{
        type:String
    },
    DoiXe:{
        type:String
    },
    MauXe:{
        type:String
    }
})

let Xe=mongoose.model("Xe",XeSchema);
module.exports={Xe};
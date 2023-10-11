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

const QuanLiSchema=new mongoose.Schema({
    TenTaiKhoan:{
        type:String,
        required:true
    },
    MatKhau:{
        type:String,
        required:true
    },
    Ten:{
        type:String,
        required:true
    },
    GioiTinh:{
        type:Boolean,
        required:true
    },
    DiaChi:{
        type:String,
        required:true
    },
    SoDienThoai:{
        type:String,
        required:true
    },
    CCCD:{
        type:String,
        required:true
    },
    BangLaiXe:{
        type:String
    }
})
let QuanLi=mongoose.model("QuanLi",QuanLiSchema);
let Xe=mongoose.model("Xe",XeSchema);
module.exports={Xe,QuanLi};
const {json} = require("body-parser");
const {SoXe} = require("../model/model");


const sodatxeController = {
    //thêm sổ đặt xe
    addSo : async(req,res) =>{
        try {
            const newSoDat = new SoDatXe(req.body);
            const saveSoDat = await newSoDat.save();
            res.status(200).json(saveSoDat);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //lấy hết tất cả sổ xe
    getAllSo:async(req,res)=>{
        try{
            const SoXes=await SoXe.find().populate(["IDKH","IDXe"]); //pupulate lấy tất các thông khách hàng và xe
            res.status(200).json(SoXes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getAllDatXe:async(req,res)=>{
        try{
            const SoXes=await SoXe.find({TinhTrang:"Chưa xác nhận"}).populate(["IDKH","IDXe"]); //pupulate lấy tất các thông khách hàng và xe
            res.status(200).json(SoXes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //Sửa thông sổ
    editSo : async(req,res) =>{
        try {
            const idSoDatXe = req.params.id;
            const{MaSo,BienSoXe,TenTaiKhoan,NgayThueXe,NgayTraXe,GiaThueXe,HinhAnh} = req.body;
            const updateSo = await SoXe.findByIdAndUpdate(idSoDatXe,{MaSo,BienSoXe,TenTaiKhoan,NgayThueXe,NgayTraXe,GiaThueXe,HinhAnh},{new : true});
            res.status(200).json(updateSo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Xóa thông tin sổ
    deleteSo : async(req,res) =>{
        try {
            const xoaSoDatXe = await SoXe.findByIdAndDelete(req.params.id);
            res.status(200).json(xoaSoDatXe);
        } catch (error) {
            
        }
    }
}

module.exports = sodatxeController;
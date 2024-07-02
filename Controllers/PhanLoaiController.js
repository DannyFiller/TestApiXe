const {PhanLoai} = require("../model/PhanLoai");

const PhanLoaiController = {

    getAllPhanLoai: async(req,res)=>{
        try{
            const phanLoais = await PhanLoai.find();
            res.status(200).json(phanLoais);
        }catch{
            res.status(500).json(err);
        }
    },
    
    addPhanLoai: async(req, res) => {
        try{
            const newPhanLoai = new PhanLoai(req.body);  
            const savePhanLoai= await newPhanLoai.save();
            res.status(200).json(savePhanLoai);
        }catch(err){
            res.status(500).json(err);
        }
    },

    updatePhanLoai:async(req,res) => {
        try{
            const phanLoaiUpdate = await PhanLoai.findById(req.params.id);
            await phanLoaiUpdate.updateOne({$set:req.body});
            res.status(200).json(phanLoaiUpdate);
        }catch(err){
            res.status(500).json(err);
        }
    },
    
    
    deletePhanLoai:async(req,res) =>{
        try{
            const phanLoaiDel = await PhanLoai.findByIdAndDelete(req.params.id);
            res.status(200).json(phanLoaiDel);
        }catch(err){
            res.status(500).json(err);
        }
    },


    getPhanLoai1:async(req,res) =>{
        try{
            const phanLoais = await PhanLoai.find({MaPhanLoai: req.params.MaPL});
            res.status(200).json(phanLoais);
        }catch(err){
            res.status(500).json(err);
        }
    }
  };
  
  module.exports = PhanLoaiController;
  
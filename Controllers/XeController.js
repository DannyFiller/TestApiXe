const {Xe}=require("../models/model");

const xeController={
    //Them xe
    addXe:async(req,res)=>{
        try{
            const newXe=new Xe(req.body);
            const saveXe=await newXe.save();
            res.status(200).json(saveXe);
        }catch(err){
            res.status(500).json(err);
        }    
    },
    getAllXe:async(req,res)=>{
        try{
            const Xes=await Xe.find();
            res.status(200).json(Xes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getBangGia:async(req,res)=>{
        try{
            const BangGia=await Xe.aggregate([
                {
                  $group: {
                    _id: {
                      LoaiXe: "$LoaiXe",
                      HangXe: "$HangXe",
                      DoiXe: "$DoiXe",
                      GiaThue: "$GiaThue",
                    },
                  },
                },
              ])
            res.status(200).json(BangGia);
        }catch(err){
            res.status(500).json(err);
        }
    },
};

module.exports=xeController;
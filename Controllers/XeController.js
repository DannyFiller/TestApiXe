const {Xe,QuanLi}=require("../models/model");

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
    
    
    updateXe:async(req,res)=>{
        try{
            const xe=await Xe.findById(req.params.id);
            await xe.updateOne({$set:req.body});
            res.status(200).json("updateSuccess");
        }catch(err){
            res.status(500).json(err);
        }    
    },
};

module.exports=xeController;

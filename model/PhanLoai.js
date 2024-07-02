const mongoose=require("mongoose");

const phanLoaiSchema = new mongoose.Schema({
    MaPhanLoai:{
        type : String,
        require: true,
    },

    TenPhanLoai :{
        type : String,
        require: true,
    }
});

let PhanLoai = mongoose.model("PhanLoai",phanLoaiSchema);

module.exports = {PhanLoai};
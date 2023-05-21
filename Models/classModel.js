const  mongoose = require("mongoose");

const class_schema = new mongoose.Schema({
    // the schemas
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true,unique:true,validate: /[a-z]/,trim:true},
    supervisor:{type: mongoose.Types.ObjectId, ref:"teachers",required:true},
    children:{type:Array,required:true,ref:"child"}
    

})

module.exports=mongoose.model("class",class_schema);


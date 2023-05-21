// conect to database
const  mongoose = require("mongoose");
const teacher_schema = new mongoose.Schema({
    // the schemas
    //mongoose.Types.ObjectId
    id:{type: mongoose.Types.ObjectId,required:true,unique:true},
    name:{type:String,required:true,unique:true,validate: /[a-z]/,trim:true},
    email:{type:String,required:true,unique:true,validate:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,trim:true},
    password:{type:String,required:true,unique:true,trim:true},
    image:{type:String,required:true}

})

module.exports=mongoose.model("teachers",teacher_schema);



const  mongoose = require("mongoose");

const address_schema=new mongoose.Schema({
    city:{type:String,required:true},
    street:{type:String,required:true},
    building:{type:Number,required:true},
})

const child_schema = new mongoose.Schema({
    // the schemas
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true,unique:true,validate: /[a-z-A-Z]/,trim:true},
    age:{type:Number,required:true,max:6,min:3},
    level:{ type: String, enum: ["PreKG","KG1","KG2"] },
    address:address_schema

})

module.exports=mongoose.model("child",child_schema);
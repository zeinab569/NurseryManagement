// crud operation
const { response } = require("express");
const { request } = require("express");
const mongoose= require("mongoose")
require("../Models/classModel")
const Class_Schema = mongoose.model("class");

exports.getallclasses=(request,response,next)=>{
    Class_Schema.find().then((data)=>{
        response.status(200).json(data);
     }).catch(error=>next(error))
}

// POst
exports.addclass=(request,response,next)=>{
    let newClass= new Class_Schema({
        id:request.body.id,
        name:request.body.name,
        supervisor:request.body.supervisor,
        children:request.body.children
    });
    newClass.save()
    .then(result=>{
        response.status(201).json(result)
    })
    .catch(error=>next(error))
    
}

//Update
exports.ubdateclass=(request,response,next)=>{
    Class_Schema.updateOne(
        {id:request.body.id,},
        { $set: {
            id:request.body.id,
            name:request.body.name,
            supervisor:request.body.supervisor,
            children:request.body.children
        
        }}
    ).then(result=>{
        response.status(200).json({message:"updated the class"})
    }).catch(error=>next(error))
  
}

exports.deleteclass=(request,response,next)=>{
    Class_Schema.deleteOne(
        {id:request.body.id,},
    ).then(result=>{
        response.status(200).json({message:"deleted the class"})
    }).catch(error=>next(error))
   
}

exports.getclassByID=(request,response,next)=>{
    response.status(200).json({data: request.params.id})
}

exports.getclassChildren=(request,response,next)=>{
    Class_Schema.findOne({id:request.body.id,}).then((data)=>{
        response.status(200).json(data);
     }).catch(error=>next(error))
    
}
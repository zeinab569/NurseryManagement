// crud operation
const mongoose= require("mongoose")
require("../Models/teacherModel")
const Teacher_Schema = mongoose.model("teachers");
// Get
exports.getallTeachers=(request,response,next)=>{

    Teacher_Schema.find().then((data)=>{
       response.status(200).json(data);
    }).catch(error=>next(error))
}
 
// Post
exports.addTeacher=(request,response,next)=>{
    let newTeacher= new Teacher_Schema({
        id:request.body.id,
        name:request.body.name,
        email:request.body.email,
        password:request.body.password,
        image:request.body.image,
    });
    newTeacher.save()
    .then(result=>{
        response.status(201).json(result)
    })
    .catch(error=>next(error))
}
 
// update
exports.ubdateTeacher=(request,response,next)=>{
    Teacher_Schema.updateOne(
        {id:request.body.id,},
        { $set: {
            name:request.body.name,
            email:request.body.email,
            password:request.body.password,
            image:request.body.image,
        
        }}
    ).then(result=>{
        response.status(200).json({message:"updated the teacher"})
    }).catch(error=>next(error))
   
}

exports.deleteTeacher=(request,response,next)=>{
    Teacher_Schema.deleteOne(
        {id:request.body.id,},
        
    ).then(result=>{
        response.status(200).json({message:"delete the teacher"})
    }).catch(error=>next(error))
}

exports.getTeacherByID=(request,response,next)=>{
    response.status(200).json({data: request.params.id})
}
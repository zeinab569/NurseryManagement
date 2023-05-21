// crud operation
const mongoose= require("mongoose")
require("../Models/childModel")
const Child_Schema = mongoose.model("child");

exports.getallChilds=(request,response,next)=>{
    Child_Schema.find().then((data)=>{
        response.status(200).json(data);
     }).catch(error=>next(error))
}

exports.addchild=(request,response,next)=>{
    let newChild= new Child_Schema({
        id:request.body.id,
        name:request.body.name,
        age:request.body.age,
        level:request.body.level,
        address:{
            city: request.body.address.city,
            street: request.body.address.street,
            building: request.body.address.building,
        }
    });
    newChild.save()
    .then(result=>{
        response.status(201).json(result)
    })
    .catch(error=>next(error))

    
}

// update
exports.ubdatechild=(request,response,next)=>{
    Child_Schema.updateOne(
        {id:request.body.id,},
        { $set: {
            name:request.body.name,
            age:request.body.age,
            level:request.body.level,
            address:{
                city:request.body.address.city,
                street:request.body.address.street,
                building:request.body.address.building,
        }
        
        }}
    ).then(result=>{
        response.status(200).json({message:"updated the child"})
    }).catch(error=>next(error))
}

// delete
exports.deletechild=(request,response,next)=>{
    Child_Schema.deleteOne(
        {id:request.body.id,},
    ).then(result=>{
        response.status(200).json({message:"delete the child"})
    }).catch(error=>next(error))
}

exports.getchildByID=(request,response,next)=>{
    response.status(200).json({data: request.params.id})
}
const express=require("express");
const mongoose=require("mongoose");
const teacherRoute= require("./Routers/teacher")
const childRouter = require("./Routers/child")
const classRouter = require("./Routers/class")
const server=express(); 
let morgan = require('morgan');
let port=process.env.PORT||8080;

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/Nursery")
      .then(()=>{
            console.log("DBconected");
            server.listen(port,()=>{
                console.log("I am listening..............", port);
            });
         })
        .catch(error=>{
            console.log("DBproblem"+ error)
        })

//server.use(morgan('tiny'));
//server.use(morgan('div'));
// server.get('/', function (req, res) {
//   res.send('hello, world!')
// })
//server.use(morgan(':method :host :status :param[id] :res[content-length] - :response-time ms'));

server.use((request,response,next)=>{
    if(true)
    {
            next();
    }
    else{
         next(new Error("Not Authenticated")) 
    }
});

// convert content to json 
server.use(express.json());

// routs
server.use(teacherRoute);
server.use(childRouter);
server.use(classRouter);


//Not Found
server.use((request,response,next)=>{
    response.status(404).json({data:"Not Fount"});
});
// Error MiddleWar
server.use((error,request,response,next)=>{
    response.status(500).json({message:"Error "+error});
});
const express = require('express');
const {body,query,param,validationResult}= require("express-validator")

let teacher_is_valid=[
    //body("id").isInt().withMessage("your id should be integer"),
    body("name").isAlpha().trim().withMessage("your name should be string"),
    body("email").isEmail().normalizeEmail().withMessage("email should be end with @.com"),
    body("password").isString().withMessage("your password should be strong"),
    body("image").isString().withMessage("name of image must be string")
  ];

  let child_is_valid = [
    body("id").isInt().withMessage("your id should be integer"),
    body("name").isAlpha().trim().withMessage("your name should be string"),
    body("age").isInt().withMessage("your id should be integer"),
    body("level").isIn(["PreKG","KG1","KG2"]).withMessage("level must be in (PreKG,KG1,KG2"),
    body("address").isObject().withMessage("address must be object"),
    body("address.city").isAlpha().trim().withMessage("must bs string"),
    body("address.street").isInt().withMessage("must bs integer"),
    body("address.building").isInt().withMessage("must bs integer"),
  ];

  let class_is_valid=[
    body("id").isInt().withMessage("your id should be integer"),
    body("name").isAlpha().withMessage("your name should be string"),
    body("children").isArray().withMessage("children must be array"),
    //body("supervisor").isIn(this.teacher_is_valid.id).withMessage("must be integer"),

  ];

  module.exports={teacher_is_valid,child_is_valid,class_is_valid}
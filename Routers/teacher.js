const express = require("express")
const {body,query,param,validationResult}= require("express-validator")
const controller = require("./../Controller/teacher")
const validate = require("./../Middelwares/errorvalidation")
const thevalidate= require("./../Middelwares/the validation objects")
const router = express.Router();

router.route("/teachers")
        .get(controller.getallTeachers)
        .post(
            thevalidate.teacher_is_valid,
            validate,
            controller.addTeacher
        )
        .patch(controller.ubdateTeacher)
        .delete(controller.deleteTeacher)
router.get("/teachers/:id",
        param("id").isInt().withMessage("your id should be integer"),
        validate,
        controller.getTeacherByID
)

module.exports = router;
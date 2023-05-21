const express = require("express")
const {body,param,query,validationResult} = require("express-validator")
const controller = require("./../Controller/class")
const validate = require("./../Middelwares/errorvalidation")
const thevalidate= require("./../Middelwares/the validation objects")
const router = express.Router();

router.route("/class")
        .get(controller.getallclasses)
        .post(
            thevalidate.class_is_valid,
            validate,
            controller.addclass
        )
        .patch(controller.ubdateclass)
        .delete(controller.deleteclass)
router.get("/class/:id",
        param("id").isInt().withMessage("your id should be integer"),
        validate,
        controller.getclassByID
)

router.get("/class/classchildern/:id",
      param("id").isInt().withMessage("your id should be integer"),
      validate,
      controller.getclassChildren
)
module.exports = router;
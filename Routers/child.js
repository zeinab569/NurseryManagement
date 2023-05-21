const express = require("express")
const {body,param,query,validationResult}= require("express-validator")
const controller = require("./../Controller/child")
const validate = require("./../Middelwares/errorvalidation")
const thevalidate= require("./../Middelwares/the validation objects")
const router = express.Router();

router.route("/child")
        .get(controller.getallChilds)
        .post(
           thevalidate.child_is_valid,
           validate,
            controller.addchild
        )
        .patch(controller.ubdatechild)
        .delete(controller.deletechild)
        
router.get("/child/:id",
        param("id").isInt().withMessage("your id should be integer"),
        validate,
        controller.getchildByID
)

module.exports = router;
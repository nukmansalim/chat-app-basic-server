const express = require("express")
const passport = require("passport")
const { createMessage } = require("../controller/MessageController")
const { MessageValidationRules, validate } = require("../utils/helpers/validator")
const local = require("../utils/strategies/local")
const router = express.Router()
router.post("/", MessageValidationRules(), validate,
   createMessage
)



module.exports = router
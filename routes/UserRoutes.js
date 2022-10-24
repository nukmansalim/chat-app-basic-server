const express = require("express")
const { findAllUsers, createUser, findOneUser, findUserByUsername } = require("../controller/UserController.js")
const router = express.Router()
const {
   userValidationRules,
   validate,
} = require("../utils/helpers/validator")
router.get("/", findAllUsers)
router.get("/:id", findOneUser)
router.get("/join", findUserByUsername)
router.post("/", createUser)
router.patch("/:id")
router.delete("/:id")
module.exports = router
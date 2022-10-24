const express = require("express")
const passport = require("passport")
const { createConversation, deleteConversation } = require("../controller/ConversationController")
const router = express.Router()
router.post("/", createConversation)
router.delete('/:id', deleteConversation)
module.exports = ConversationRoutes = router


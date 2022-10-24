const express = require("express")

const Conversation = require("../model/Conversation")

exports.createConversation = async (req, res) => {


   const newConversation = await Conversation.create(req.body)
   res.send(newConversation)
}

exports.deleteConversation = async (req, res) => {
   await Conversation.deleteOne({ _id: req.params.id })
   res.send({ message: "Conversation is successfully deleted" })
}

const express = require("express")
const Message = require("../model/Message")
const Conversation = require("../model/Conversation")

exports.createMessage = async (req, res) => {
   const { creator, content, recipient, conversation } = req.body
   const newMessage = await Message.create({ creator, content, recipient, conversation })
   await Conversation.updateOne({ creator, recipient }, { $push: { messages: newMessage.id } })
   res.send(newMessage)
}

exports.deleteLastMessage = (req, res) => {

}
const mongoose = require("mongoose")



const MessageSchema = new mongoose.Schema({
   creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      uniqure: true
   },
   content: {
      type: String
   },
   recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      uniqure: true
   },
   conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation"
   }

}, { timestamps: true })

module.exports = Message = mongoose.model("Message", MessageSchema)
const mongoose = require("mongoose")
const Message = require("./Message")

const ConversationSchema = new mongoose.Schema({
   creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      uniqure: true
   },
   recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      uniqure: true
   },
   messages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      nullable: true
   }]

}, { timestamps: true })

ConversationSchema.pre('deleteOne', async function (next) {
   await Message.deleteMany({ where: { conversation: this._conditions._id } })
   next()
})


module.exports = Conversation = mongoose.model("Conversation", ConversationSchema);
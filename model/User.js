const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true
   },
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   conversations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      nullable: true
   }]


},
   { timestamps: true })


module.exports = User = mongoose.model("User", UserSchema)

const express = require("express")
const User = require("../model/User.js")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
exports.findAllUsers = async (req, res) => {
   const users = await User.find().select("-password").exec()
   res.send(users)
}

exports.findOneUser = async (req, res) => {
   const { id } = req.params
   const user = await User.findOne({ id }).select("-password")
   try {

      res.send(user)
   } catch (error) {
      if (!user)
         console.error(error)

   }
}
exports.findUserByUsername = async (req, res) => {
   const { username } = req.body

   const user = await User.findOne({ username })
   if (!user) res.status(400).json({ message: "User Not Found" })
   res.send(user)

}
exports.createUser = async (req, res) => {
   try {

      const { username, firstName, lastName, email, password } = req.body
      const userIsExists = await User.findOne({ email })
      if (userIsExists) return res.status(400).json({ message: " user is already exists" })
      const hashedPass = await bcrypt.hash(password, 12)
      const user = await User.create({ username, firstName, lastName, email, password: hashedPass })
      const response = {


         id: user.id,
         user: user.username,
         firstName: user.firstName,
         lastName: user.lastName,
         email: user.email,
         conversations: user.conversations
      }
      if (user) res.send({ message: "OK", user: response })
   } catch (error) {
      console.log(error)
   }

}

exports.updateUser = async (req, res) => {
   const id = req.params.id
   const UpdateUserParams = req.body
   const user = await User.findOneAndUpdate(id, UpdateUserParams)
   if (!user) res.status(400).json({ message: "user not found!" })
   res.send(user)

}

const { body, validationResult } = require('express-validator')
const bcrypt = require("bcrypt")
const userValidationRules = () => {
   return [
      body('email').isEmail(),
      body('password').isLength({ min: 5 }),
   ]
}

const MessageValidationRules = () => {
   return [
      body('creator').not().isEmpty(),
      body('recipient').not().isEmpty(),
      body('content').not().isEmpty(),
      body('conversation').not().isEmpty()
   ]
}

const validate = (req, res, next) => {
   const errors = validationResult(req)
   if (errors.isEmpty()) {
      return next()
   }
   const extractedErrors = []
   errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

   return res.status(422).json({
      errors: extractedErrors,
   })
}

const ComparePassword = async (password, encrypted) => {
   const compared = await bcrypt.compare(password, encrypted)
   return compared
}

module.exports = {
   MessageValidationRules,
   userValidationRules,
   validate,
   ComparePassword
}
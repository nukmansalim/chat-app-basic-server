const LocalStrategy = require("passport-local")
const passport = require("passport")
const User = require("../../model/User");
const { ComparePassword } = require("../helpers/validator");
passport.use(new LocalStrategy(
   async (username, password, done) => {
      try {
         const user = await User.findOne({ username })
         if (!user) return done(null, false)
         await ComparePassword(password, user.password)
         if (!ComparePassword) return done(null, false)
         const response = {


            id: user.id,
            user: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            conversations: user.conversations

         }
         return done(null, { message: "OK", user: response });
      } catch (error) {
         console.log(error)
      }

   }
));

module.exports = passport

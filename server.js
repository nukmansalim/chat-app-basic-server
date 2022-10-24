const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const { AuthRoutes, UserRoutes, MessageRoutes, ConversationRoutes } = require("./routes")
const local = require("./utils/strategies/local")
const session = require("express-session")
const app = express()
const passport = require("passport")


//middleware
require("dotenv").config({ path: ".env.local" })
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(session({
   secret: String(process.env.SESSION_CONSTANT),
   saveUninitialized: true,
   resave: false,
   cookie: {
      maxAge: 60 * 60 * 1000
   }
}))
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
   done(null, user)
})

passport.deserializeUser((user, done) => {
   done(null, user)
})

//routes
app.use("/user", UserRoutes)
app.use("/auth", AuthRoutes)
app.use("/message", MessageRoutes)
app.use("/conversation", ConversationRoutes)
//server & database connections
mongoose.connect(process.env.MONGO).then(
   app.listen(8080, () => console.log("server is running"))
)




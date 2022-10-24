const express = require("express")
const passport = require("passport")
const local = require("../utils/strategies/local")
const router = express.Router()

router.post('/login', passport.authenticate('local'),
   (req, res) => {
      console.log(req.user)
      res.send(req.user)
   }
)



module.exports = router
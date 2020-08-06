const express = require("express")
const router = express.Router()

const {signout} = require("../controllers/auth")


router.get("/auth", signout )

module.exports = router
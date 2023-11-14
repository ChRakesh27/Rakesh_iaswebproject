const adminRouter = require("../controller/admin.controller")
const express = require("express")

const router = express.Router()

router.use('/admin', adminRouter)

module.exports = router;
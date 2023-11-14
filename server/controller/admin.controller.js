const express = require("express")
const admin = require("../model/admin.model")
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const docs = await admin.find().sort({ "submit_time": -1 })
        console.log("get")
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const obj = req.body;
        console.log(new Date());
        obj.submit_time = new Date();
        const docs = await admin.create(obj)
        res.send(docs)
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;
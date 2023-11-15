const express = require("express")
const question = require("../model/question.model")
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const docs = await question.find().sort({ "submit_time": -1 })
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const docs = await question.findById(req.query.id)
        res.send(docs)
    } catch (error) {
        res.send(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const obj = req.body;
        obj.submit_time = new Date();
        const docs = await question.create(obj)
        res.send(docs)
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;